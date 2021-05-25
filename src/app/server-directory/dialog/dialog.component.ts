import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  imgSrc;
  txtFileContents;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _api: ApiService,
    private _snackbar:MatSnackBar
  ) {}

  ngOnInit(): void {
    let filepath = this.data.filepath;
    let extension = filepath.substr(filepath.length - 3);

    if (extension === 'png') {
      this.txtFileContents = null;
      this.imgSrc = 'http://localhost:5000/fetch-images?filepath=' + filepath;
    } else if (extension === 'txt') {
      this.imgSrc = null;
      this._api
        .api_getFileContent({
          filepath: this.data.filepath,
        })
        .subscribe(
          (data) => {
            this.txtFileContents = data['fileContents'];
          },
          (error) => {
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
}
