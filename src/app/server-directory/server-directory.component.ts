import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-server-directory',
  templateUrl: './server-directory.component.html',
  styleUrls: ['./server-directory.component.css']
})
export class ServerDirectoryComponent implements OnInit, AfterViewInit {

  data = {
    "directories": [
      {
        "files": [
          "grayscale.png",
          "original_input.png",
          "segment_panels.png",
          "thresh.png"
        ],
        "folderName": "04_12_2021_23-16-26-163888",
        "folders": [
          {
            "files": [
              "binary_inv.png",
              "binary_thresh.png",
              "contour.png",
              "Contour_in_white.png",
              "contour_list_coords.txt",
              "gray_img.png",
              "input_img.png",
              "localized_bubbles.png",
              "panel0.png",
              "segmented_bubbles"
            ],
            "folderName": "panel0",
            "segmentedBubbles": [
              "cropped_imgs0.png",
              "cropped_imgs1.png"
            ]
          },
          {
            "files": [
              "binary_inv.png",
              "binary_thresh.png",
              "contour.png",
              "Contour_in_white.png",
              "contour_list_coords.txt",
              "gray_img.png",
              "input_img.png",
              "localized_bubbles.png",
              "panel1.png",
              "segmented_bubbles"
            ],
            "folderName": "panel1",
            "segmentedBubbles": [
              "cropped_imgs0.png",
              "cropped_imgs1.png",
              "cropped_imgs2.png"
            ]
          },
          {
            "files": [
              "binary_inv.png",
              "binary_thresh.png",
              "contour.png",
              "Contour_in_white.png",
              "contour_list_coords.txt",
              "gray_img.png",
              "input_img.png",
              "localized_bubbles.png",
              "panel2.png",
              "segmented_bubbles"
            ],
            "folderName": "panel2",
            "segmentedBubbles": [
              "cropped_imgs0.png",
              "cropped_imgs1.png",
              "cropped_imgs2.png",
              "cropped_imgs3.png",
              "cropped_imgs4.png",
              "cropped_imgs5.png"
            ]
          }
        ]
      },
      {
        "files": [
          "grayscale.png",
          "original_input.png",
          "segment_panels.png",
          "thresh.png"
        ],
        "folderName": "04_12_2021_23-46-31-961175",
        "folders": [
          {
            "files": [
              "panel0.png"
            ],
            "folderName": "panel0"
          },
          {
            "files": [
              "panel1.png"
            ],
            "folderName": "panel1"
          },
          {
            "files": [
              "panel2.png"
            ],
            "folderName": "panel2"
          },
          {
            "files": [
              "panel3.png"
            ],
            "folderName": "panel3"
          }
        ]
      }
    ]
  }

  temp = [0, 1, 2, 3, 4, 5]
  @ViewChildren('el') el: QueryList<ElementRef>;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    this._api.api_getServerDirectory().subscribe((data) => {
      console.log(this.data)
    },
      (error) => {
        console.log(error)
      }
    )



  }

  ngAfterViewInit() {
    this.el.forEach((ele) => {
      ele.nativeElement.addEventListener('click', () => {
        ele.nativeElement.classList.toggle('active')
      })
    })
  }

}
