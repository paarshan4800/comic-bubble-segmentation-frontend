import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  imageSrc;
  userFile;
  imageSelected;
  state;
  base64;


  @ViewChild("fileInput", { read: ElementRef }) fileInput: ElementRef

  constructor(
    private _http: HttpClient,
    private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _router: Router,
    private _api: ApiService
  ) {


  }

  ngOnInit(): void {
  }



  scrollDown() {
    let el = document.getElementById("panel");
    el.scrollIntoView({ behavior: "smooth" });
  }

  onFileChanged(event) {
    this.userFile = event.target.files[0];
    this.imageSelected = this.userFile.name;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0])
      }
    }



  }


  uploadImage() {
    const uploadData = new FormData()
    uploadData.append("image", this.userFile);

    this._api.api_uploadComicImage(uploadData).subscribe((data) => {
      console.log(data, "RESPONSE FROM SERVER")
    },
      (error) => {
        console.log(error)
      })

  }

}
