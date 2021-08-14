import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UphIndexComponent } from './uph-index.component';

describe('UphIndexComponent', () => {
  let component: UphIndexComponent;
  let fixture: ComponentFixture<UphIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UphIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UphIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
