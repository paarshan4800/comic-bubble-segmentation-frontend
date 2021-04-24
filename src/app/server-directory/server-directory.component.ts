import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Stack } from '../data-structures/stack';
import { ApiService } from '../services/api.service';
import {DialogComponent} from "./dialog/dialog.component"

@Component({
  selector: 'app-server-directory',
  templateUrl: './server-directory.component.html',
  styleUrls: ['./server-directory.component.css']
})
export class ServerDirectoryComponent implements OnInit {

  currentDirectoryPath;
  formattedCurrentDirectoryPath;
  files = []
  folders = []
  stack:Stack = new Stack()
  rootDirectory : Boolean;

  data;

  constructor(
    private _api: ApiService,
    private _dialog:MatDialog
  ) { }

  setFoldersFiles(data) {
    this.currentDirectoryPath = data["currentDirectoryPath"]
    this.formattedCurrentDirectoryPath = this.currentDirectoryPath.replaceAll("//", "/");
    this.files = data["files"]
    this.folders = data["folders"]
    this.data = data
  }

  ngOnInit(): void {
    this._api.api_getServerDirectories({ "path": ".//output" }).subscribe((data) => {
      this.setFoldersFiles(data)
    },
      (error) => {
        console.log(error)
      }
    )

  }

  clickedFolder(data) {
    this._api.api_getServerDirectories(
      { "path": this.currentDirectoryPath + data }
    ).subscribe((data) => {
      this.stack.push(this.currentDirectoryPath)
      this.setFoldersFiles(data)
      
    },
      (error) => {
        console.log(error)
      })
  }

  clickedFile(data) {

    this._dialog.open(DialogComponent, {
      data: {
        filepath:this.currentDirectoryPath + data,
      },
      backdropClass: 'dialogBG',
      autoFocus: false
    })

  }

  openDialog() {
    
  }

  goBack() {
    if(this.stack.getLength() == 0) {
      return
    }

    // this.stack.pop()
    let path = this.stack.pop()
    this._api.api_getServerDirectories(
      { "path": path }
    ).subscribe((data) => {
      this.setFoldersFiles(data)
    },
      (error) => {
        console.log(error)
      })
  }
}
