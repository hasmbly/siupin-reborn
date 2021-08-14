import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berita-index',
  templateUrl: './berita-index.component.html',
  styleUrls: ['./berita-index.component.css'],
})
export class BeritaIndexComponent implements OnInit {
  beritaRow: number = 5;

  value: string = '';

  sideNavBodyRowspan: number =
    this.beritaRow == 0 || this.beritaRow <= 2
      ? 2
      : Math.ceil(this.beritaRow / 2);

  constructor() {}

  ngOnInit(): void {}
}
