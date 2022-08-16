import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerritosComponent } from './perritos.component';

describe('PerritosComponent', () => {
  let component: PerritosComponent;
  let fixture: ComponentFixture<PerritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
