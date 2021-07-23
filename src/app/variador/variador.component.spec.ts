import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariadorComponent } from './variador.component';

describe('VariadorComponent', () => {
  let component: VariadorComponent;
  let fixture: ComponentFixture<VariadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
