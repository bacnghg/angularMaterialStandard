import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeaturesComponent } from './view-features.component';

describe('ViewFeaturesComponent', () => {
  let component: ViewFeaturesComponent;
  let fixture: ComponentFixture<ViewFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
