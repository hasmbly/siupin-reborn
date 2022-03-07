import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Berita } from 'src/models/berita';

@Component({
  selector: 'app-berita-index',
  templateUrl: './berita-index.component.html',
  styleUrls: ['./berita-index.component.css'],
})
export class BeritaIndexComponent implements OnInit {
  beritaRow: number = 5;
  value: string = '';
  beritas: any[] = [];

  sideNavBodyRowspan: number =
    this.beritaRow == 0 || this.beritaRow <= 2
      ? 2
      : Math.ceil(this.beritaRow / 2);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBeritas().subscribe((data: Berita[]) =>
    {
      console.log(data);
      
      this.beritas = data;
    })
  }
}