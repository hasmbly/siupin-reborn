import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaIndexComponent } from './berita-index.component';

describe('BeritaIndexComponent', () => {
  let component: BeritaIndexComponent;
  let fixture: ComponentFixture<BeritaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeritaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
