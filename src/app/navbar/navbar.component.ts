import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("navOpen", { read: ElementRef }) navOpen: ElementRef
  @ViewChild("navClose", { read: ElementRef }) navClose: ElementRef
  @ViewChild("navSide", { read: ElementRef }) navSide: ElementRef
  @ViewChildren('navLink') navLink: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    // Click Event -> Open Side Nav
    this.navOpen.nativeElement.addEventListener('click', () => {
      this.navSide.nativeElement.style.width = "300px"
    })

    // Click Event -> Close Side Nav
    this.navClose.nativeElement.addEventListener('click', () => {
      this.navSide.nativeElement.style.width = "0px"
    })

    // Click Event -> Each Nav Link
    this.navLink.forEach((link) => {
      link.nativeElement.addEventListener('click', () => {
        this.navSide.nativeElement.style.width = "0px"
      })
    })
  }


}
