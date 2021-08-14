import { string } from '@amcharts/amcharts4/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uph-produk-index',
  templateUrl: './uph-produk-index.component.html',
  styleUrls: ['./uph-produk-index.component.css'],
})
export class UphProdukIndexComponent implements OnInit {
  selectedCategory: string = '';
  value: string = 'Clear me';

  constructor() {}

  ngOnInit(): void {}
}
