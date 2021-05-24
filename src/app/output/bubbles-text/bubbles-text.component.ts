import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bubbles-text',
  templateUrl: './bubbles-text.component.html',
  styleUrls: ['./bubbles-text.component.css'],
})
export class BubblesTextComponent implements OnInit {
  @Input() localized_bubbles: String;
  @Input() chosenPanel: String;
  @Input() extracted_text: any;

  constructor() {}

  ngOnInit(): void {}
}
