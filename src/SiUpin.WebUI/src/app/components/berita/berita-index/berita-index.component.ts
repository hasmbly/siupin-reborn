import { Component, OnInit } from '@angular/core';
import { BeritaService } from 'src/app/services/berita.service';
import { Berita } from 'src/models/berita';

@Component({
  selector: 'app-berita-index',
  templateUrl: './berita-index.component.html',
  styleUrls: ['./berita-index.component.css'],
})
export class BeritaIndexComponent implements OnInit {
  beritaRow: number = 0;
  value: string = "";
  beritas: any[] = [];

  sideNavBodyRowspan: number =
    this.beritaRow == 0 || this.beritaRow <= 2
      ? 2
      : Math.ceil(this.beritaRow / 2);

  constructor(private beritaService: BeritaService) { }

  ngOnInit(): void {
    this.beritaService.getBeritas().subscribe((data: Berita[]) =>
    {
      console.log(data);
      
      this.beritas = data;
      this.beritaRow = data.length;
    })
  }
}