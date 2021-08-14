import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskToPmhpComponent } from './ask-to-pmhp.component';

describe('AskToPmhpComponent', () => {
  let component: AskToPmhpComponent;
  let fixture: ComponentFixture<AskToPmhpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskToPmhpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskToPmhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
