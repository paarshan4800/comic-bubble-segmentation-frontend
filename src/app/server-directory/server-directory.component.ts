import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Stack } from '../data-structures/stack';
import { ApiService } from '../services/api.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-server-directory',
  templateUrl: './server-directory.component.html',
  styleUrls: ['./server-directory.component.css'],
})
export class ServerDirectoryComponent implements OnInit {
  currentDirectoryPath;
  formattedCurrentDirectoryPath;
  files = [];
  folders = [];
  stack: Stack = new Stack();
  rootDirectory: Boolean;
  loader:Boolean

  data;

  constructor(
    private _api: ApiService,
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar
  ) {}

  setFoldersFiles(data) {
    this.currentDirectoryPath = data['currentDirectoryPath'];
    this.formattedCurrentDirectoryPath = this.currentDirectoryPath.replaceAll(
      '//',
      '/'
    );
    this.files = data['files'];
    this.folders = data['folders'];
    this.data = data;
  }

  ngOnInit(): void {
    this.loader = true
    this._api.api_getServerDirectories({ path: './/output' }).subscribe(
      (data) => {
        this.loader = false
        this.setFoldersFiles(data);
      },
      (error) => {
        this.loader = false
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

  clickedFolder(data) {
    this.loader = true
    this._api
      .api_getServerDirectories({ path: this.currentDirectoryPath + data })
      .subscribe(
        (data) => {
          this.loader = false
          this.stack.push(this.currentDirectoryPath);
          this.setFoldersFiles(data);
        },
        (error) => {
          this.loader = false
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

  clickedFile(data) {
    this._dialog.open(DialogComponent, {
      data: {
        filepath: this.currentDirectoryPath + data,
      },
      backdropClass: 'dialogBG',
      autoFocus: false,
    });
  }

  openDialog() {}

  goBack() {
    if (this.stack.getLength() == 0) {
      return;
    }

    // this.stack.pop()
    let path = this.stack.pop();
    this._api.api_getServerDirectories({ path: path }).subscribe(
      (data) => {
        this.setFoldersFiles(data);
      },
      (error) => {
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
