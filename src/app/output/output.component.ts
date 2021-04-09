import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  userFile;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userFile = this._route.snapshot.paramMap.get("image")
    console.log(this.userFile)
  }

}
