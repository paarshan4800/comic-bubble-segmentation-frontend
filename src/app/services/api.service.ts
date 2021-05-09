import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL = 'http://localhost:5000';

  constructor(private _http: HttpClient) {}

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error.error['message'] || error || 'SERVER ERROR');
  }

  api_getSampleImages() {
    return this._http
      .get(this.baseURL + '/sample-images', {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  api_uploadComicImage(data: FormData) {
    return this._http
      .post(this.baseURL + '/image_upload', data)
      .pipe(catchError(this.errorHandler));
  }

  api_userSelectSampleImage(data) {
    return this._http
      .post(this.baseURL + '/user-sample-images', data, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  api_segment(data) {
    return this._http
      .post(this.baseURL + '/segment', data, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  api_getServerDirectories(data) {
    return this._http
      .post(this.baseURL + '/folders', data, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  api_getFileContent(data) {
    console.log(data);
    return this._http
      .post(this.baseURL + '/file-contents', data, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }
}
