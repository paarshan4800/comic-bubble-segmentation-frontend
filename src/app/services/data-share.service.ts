import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  // private outputData = {
  //   "originalInput": "output\\04_11_2021_23-45-29-544186\\original_input.png",
  //   "panels": [
  //     "output\\04_11_2021_23-45-29-544186\\panel0\\panel0.png",
  //     "output\\04_11_2021_23-45-29-544186\\panel1\\panel1.png",
  //     "output\\04_11_2021_23-45-29-544186\\panel2\\panel2.png",
  //     "output\\04_11_2021_23-45-29-544186\\panel3\\panel3.png",
  //     "output\\04_11_2021_23-45-29-544186\\panel4\\panel4.png"
  //   ]


  //   // "panels": ["output\\04_09_2021_15-19-51-879613\\panel0\\panel0.png", "output\\04_09_2021_15-19-51-879613\\panel1\\panel1.png", "output\\04_09_2021_15-19-51-879613\\panel2\\panel2.png", "output\\04_09_2021_15-19-51-879613\\panel3\\panel3.png", "output\\04_09_2021_15-19-51-879613\\panel4\\panel4.png"]
  // }

  private outputData: Output
  // private originalInput = "output\\04_09_2021_15-23-47-084859\\original_input.png"
  // private panels = ['output\\04_09_2021_15-19-51-879613\\panel0\\panel0.png', 'output\\04_09_2021_15-19-51-879613\\panel1\\panel1.png', 'output\\04_09_2021_15-19-51-879613\\panel2\\panel2.png', 'output\\04_09_2021_15-19-51-879613\\panel3\\panel3.png', 'output\\04_09_2021_15-19-51-879613\\panel4\\panel4.png'];

  constructor() { }

  // this._dataShare.setPanels({
  //   "originalInput": data["inputImage"],
  //   "panels": data["panels"]
  // })

  setPanels(input, panels) {
    this.outputData = {
      "originalInput": input,
      "panels": panels
    }
  }

  getPanels() {
    return this.outputData
  }
}

interface Output {
  originalInput: String;
  panels: String;
}