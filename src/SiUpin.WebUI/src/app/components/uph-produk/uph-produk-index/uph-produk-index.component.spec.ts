import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UphProdukIndexComponent } from './uph-produk-index.component';

describe('UphProdukIndexComponent', () => {
  let component: UphProdukIndexComponent;
  let fixture: ComponentFixture<UphProdukIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UphProdukIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UphProdukIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
