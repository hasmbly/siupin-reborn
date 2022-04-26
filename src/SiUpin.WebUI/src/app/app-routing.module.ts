import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { BeritaIndexComponent } from './components/berita/berita-index/berita-index.component';

import { ClusterIndexComponent } from './components/cluster/cluster-index/cluster-index.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { UphProdukIndexComponent } from './components/uph-produk/uph-produk-index/uph-produk-index.component';
import { UphIndexComponent } from './components/uph/uph-index/uph-index.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'uph',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: UphIndexComponent,
      },
    ],
  },
  {
    path: 'cluster',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: ClusterIndexComponent,
      },
    ],
  },
  {
    path: 'katalog',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: UphProdukIndexComponent,
      },
    ],
  },
  {
    path: 'berita',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: BeritaIndexComponent,
      },
    ],
  },
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  {
    path: 'admin/dashboard',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
