import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  panels = Array<PanelImage>();
  inputImage: String;
  localized_bubbles: String;
  extracted_text: String;
  localized_bubbles_loader: Boolean;
  showBubblesText: Boolean;
  chosenPanel: String;

  constructor(
    private router: Router,
    private _dataShare: DataShareService,
    private _api: ApiService
  ) {}

  scrollDown() {
    let el = document.getElementById('bubbles-text');
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.localized_bubbles_loader = false;
    this.showBubblesText = false;
    let temp = this._dataShare.getPanels();

    if (temp === undefined) {
      this.router.navigateByUrl('/');
    } else {
      this.inputImage =
        'http://localhost:5000/fetch-images?filepath=' + temp.originalInput;
      for (let i = 0; i < temp.panels.length; i++) {
        this.panels.push({
          src: 'http://localhost:5000/fetch-images?filepath=' + temp.panels[i],
          fileName: temp.panels[i],
        });
      }
    }
  }

  clickedPanel(filename) {
    this.showBubblesText = true;
    this.localized_bubbles_loader = true;

    this._api.api_segment({ filename: filename }).subscribe(
      (data) => {
        console.log(data);
        this.localized_bubbles =
          'http://localhost:5000/fetch-images?filepath=' +
          data['localized_bubbles'];
        this.chosenPanel =
          'http://localhost:5000/fetch-images?filepath=' + data['chosenPanel'];
        this.extracted_text = data['extracted_string'];
        this.localized_bubbles_loader = false;
      },
      (error) => {
        console.log(error);
      }
    );

    this.scrollDown();
  }
}

interface PanelImage {
  src: String;
  fileName: String;
}
