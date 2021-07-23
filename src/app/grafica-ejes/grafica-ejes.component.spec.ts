import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEjesComponent } from './grafica-ejes.component';

describe('GraficaEjesComponent', () => {
  let component: GraficaEjesComponent;
  let fixture: ComponentFixture<GraficaEjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaEjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaEjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
