import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sample-images',
  templateUrl: './sample-images.component.html',
  styleUrls: ['./sample-images.component.css']
})
export class SampleImagesComponent implements OnInit {

  sampleImages = [];

  constructor(private _api: ApiService, private _sanitizer: DomSanitizer, private _router: Router) { }

  ngOnInit(): void {
    this._api.api_getSampleImages().subscribe((data) => {
      this.sampleImages = data["images"]

      for (let i = 0; i < this.sampleImages.length; i++) {
        this.sampleImages[i] = "http://localhost:5000/fetch-sample-images/" + this.sampleImages[i];
      }
    },
      (error) => {
        console.log(error)
      }
    )
  }

  clickedImage(event) {
    let clickedImageSrc = event.target.src
    this._router.navigate(['/homepage', { "image": clickedImageSrc }])
  }


}
