import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';
import { ApiService } from '../services/api.service';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-sample-images',
  templateUrl: './sample-images.component.html',
  styleUrls: ['./sample-images.component.css'],
})
export class SampleImagesComponent implements OnInit {
  sampleImages = Array<SampleImage>();
  loader: Boolean = false;

  constructor(
    private _api: ApiService,
    private _sanitizer: DomSanitizer,
    private _router: Router,
    private _dataShare: DataShareService,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loader = true;
    this._api.api_getSampleImages().subscribe(
      (data) => {
        for (let i = 0; i < data['images'].length; i++) {
          this.sampleImages.push({
            src:
              'http://localhost:5000/fetch-images?filepath=' +
              data['images'][i],
            fileName: data['images'][i],
          });
        }

        this.loader = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clickedImage(fileName) {
    this.loader = true;
    this._api.api_userSelectSampleImage({ filename: fileName }).subscribe(
      (data) => {
        console.log(data);
        this._dataShare.setPanels(data['inputImage'], data['panels']);
        this.loader = false;
        this._router.navigateByUrl('/output');
      },
      (error) => {
        this.loader = false;
        console.log(error);
        this._snackbar.open(error, null, {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snackbarStyle'],
        });
      }
    );
  }
}

interface SampleImage {
  src: String;
  fileName: String;
}
