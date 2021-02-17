import { SearchModalComponent } from './search-modal/search-modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed = true;

  constructor(
    public modal: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  toggleMenuCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  openModal(): void {
    this.modal
      .open(SearchModalComponent, {
        backdropClass: 'dark-backdrop',
        windowClass: 'search-modal',
        centered: true,
      })
      .result.then((foo) => {})
      .catch((foo) => {});
  }
}
