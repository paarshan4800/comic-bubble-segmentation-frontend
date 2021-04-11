import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  imageSrc;
  userFile;
  imageSelected;
  loader: Boolean;


  constructor(
    private _api: ApiService,
    private _dataShare: DataShareService,
    private _router: Router
  ) {


  }

  ngOnInit(): void {
    this.loader = false;
  }



  scrollDown() {
    let el = document.getElementById("panel");
    el.scrollIntoView({ behavior: "smooth" });
  }

  onFileChanged(event) {

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.userFile = file
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }

  }


  uploadImage() {
    this.loader = true;
    const uploadData = new FormData()
    uploadData.append("image", this.userFile);

    this._api.api_uploadComicImage(uploadData).subscribe((data) => {
      this._dataShare.setPanels(data["inputImage"], data["panels"])
      this.loader = false;
      this._router.navigateByUrl("/output")
    },
      (error) => {
        console.log(error)
      })

  }

}
