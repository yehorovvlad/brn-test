import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  searchIsOpen: boolean;
  menuIsOpen: boolean;

  constructor() { }

  ngOnInit(): void { }

  toggleSearch() {
    this.searchIsOpen = !this.searchIsOpen;
    if(this.searchIsOpen && this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
