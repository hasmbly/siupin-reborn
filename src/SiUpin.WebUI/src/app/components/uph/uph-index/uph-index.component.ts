import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  no: number;
  nama_uph: string;
  ketua: string;
  handphone: string;
  provinsi: string;
  kota: string;
  alamat: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    no: 1,
    nama_uph: 'Uph Test 01',
    ketua: 'Ketua 01',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 01',
  },
  {
    no: 2,
    nama_uph: 'Uph Test 02',
    ketua: 'Ketua 02',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 02',
  },
  {
    no: 3,
    nama_uph: 'Uph Test 03',
    ketua: 'Ketua 03',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 03',
  },
  {
    no: 4,
    nama_uph: 'Uph Test 04',
    ketua: 'Ketua 04',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 04',
  },
  {
    no: 5,
    nama_uph: 'Uph Test 05',
    ketua: 'Ketua 05',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 05',
  },
  {
    no: 6,
    nama_uph: 'Uph Test 06',
    ketua: 'Ketua 06',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 06',
  },
  {
    no: 7,
    nama_uph: 'Uph Test 07',
    ketua: 'Ketua 07',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 07',
  },
  {
    no: 8,
    nama_uph: 'Uph Test 08',
    ketua: 'Ketua 08',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 08',
  },
  {
    no: 9,
    nama_uph: 'Uph Test 09',
    ketua: 'Ketua 09',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 09',
  },
  {
    no: 10,
    nama_uph: 'Uph Test 10',
    ketua: 'Ketua 10',
    handphone: '08112345678',
    provinsi: 'Sulawesi Utara',
    kota: 'KAB. Minahasa Selatan',
    alamat: 'Jl. Alamat Test 10',
  },
];

@Component({
  selector: 'app-uph-index',
  templateUrl: './uph-index.component.html',
  styleUrls: ['./uph-index.component.css'],
})
export class UphIndexComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'no',
    'nama_uph',
    'ketua',
    'handphone',
    'provinsi',
    'kota',
    'alamat',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
