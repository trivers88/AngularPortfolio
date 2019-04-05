import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGuesserComponent } from './color-guesser.component';

describe('ColorGuesserComponent', () => {
  let component: ColorGuesserComponent;
  let fixture: ComponentFixture<ColorGuesserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorGuesserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
