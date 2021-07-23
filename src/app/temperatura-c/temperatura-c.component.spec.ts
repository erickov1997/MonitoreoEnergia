import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaCComponent } from './temperatura-c.component';

describe('TemperaturaCComponent', () => {
  let component: TemperaturaCComponent;
  let fixture: ComponentFixture<TemperaturaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
