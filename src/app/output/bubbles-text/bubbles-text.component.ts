import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubbles-text',
  templateUrl: './bubbles-text.component.html',
  styleUrls: ['./bubbles-text.component.css']
})
export class BubblesTextComponent implements OnInit {

  @Input() localized_bubbles: String;
  @Input() chosenPanel: String;
  @Input() loader: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
