import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: new FormControl('')
    });
  }

  onSubmit(): void {
    let searchQuery = this.searchForm.value.searchQuery;
    this.router.navigate(['/search', searchQuery]);
    this.activeModal.close();
  }
}
