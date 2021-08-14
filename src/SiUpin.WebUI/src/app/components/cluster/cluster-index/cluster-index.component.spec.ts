import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterIndexComponent } from './cluster-index.component';

describe('ClusterIndexComponent', () => {
  let component: ClusterIndexComponent;
  let fixture: ComponentFixture<ClusterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
