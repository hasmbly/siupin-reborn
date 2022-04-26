import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

import { DemoComponent } from './components/demo/demo.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { MapComponent } from './components/shared/map/map.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { ClusterIndexComponent } from './components/cluster/cluster-index/cluster-index.component';
import { UphIndexComponent } from './components/uph/uph-index/uph-index.component';
import { HomeComponent } from './components/home/home.component';
import { UphProdukIndexComponent } from './components/uph-produk/uph-produk-index/uph-produk-index.component';
import { BeritaIndexComponent } from './components/berita/berita-index/berita-index.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AskToPmhpComponent } from './components/ask-to-pmhp/ask-to-pmhp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminToolbarComponent } from './components/shared/admin-toolbar/admin-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FooterComponent,
    SideNavComponent,
    ToolbarComponent,
    MapComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    ClusterIndexComponent,
    UphIndexComponent,
    HomeComponent,
    UphProdukIndexComponent,
    BeritaIndexComponent,
    ContactUsComponent,
    AskToPmhpComponent,
    LoginComponent,
    DashboardComponent,
    AdminToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCarouselModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
    MatRadioModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
