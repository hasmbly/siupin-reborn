import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Cluster {
  no: number;
  cluster: string;
  keterangan: number;
  total: number;
}

const DUMMY_DATA: Cluster[] = [
  {
    no: 1,
    cluster: 'A',
    keterangan: 4,
    total: 6,
  },
  {
    no: 2,
    cluster: 'B',
    keterangan: 3,
    total: 41,
  },
  {
    no: 3,
    cluster: 'C',
    keterangan: 2,
    total: 261,
  },
  {
    no: 4,
    cluster: 'D',
    keterangan: 1,
    total: 1985,
  },
];

@Component({
  selector: 'app-cluster-index',
  templateUrl: './cluster-index.component.html',
  styleUrls: ['./cluster-index.component.css'],
})
export class ClusterIndexComponent implements AfterViewInit {
  displayedColumns: string[] = ['no', 'cluster', 'keterangan', 'total'];
  dataSourceCluster = new MatTableDataSource<Cluster>(DUMMY_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSourceCluster.paginator = this.paginator;
  }
}
