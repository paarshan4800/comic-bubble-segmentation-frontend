import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loaderdialog',
  templateUrl: './loaderdialog.component.html',
  styleUrls: ['./loaderdialog.component.css'],
})
export class LoaderdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }
}
