import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:5000";

  constructor(private _http: HttpClient) { }

  api_getSampleImages() {
    return this._http.get(this.baseURL + "/sample-images")
  }

  api_uploadComicImage(data: FormData) {
    return this._http.post(this.baseURL + "/image_upload", data)
  }

  api_userSelectSampleImage(data) {
    return this._http.post(this.baseURL + "/user-sample-images", data)
  }

  api_segment(data) {
    return this._http.post(this.baseURL + "/segment", data)
  }

  api_getServerDirectory() {
    return this._http.get(this.baseURL + "/files/output/directories")
  }


}
