import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateCssComponent } from './animate-css.component';

describe('AnimateCssComponent', () => {
  let component: AnimateCssComponent;
  let fixture: ComponentFixture<AnimateCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
