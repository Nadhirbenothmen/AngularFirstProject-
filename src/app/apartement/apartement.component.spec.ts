import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartementComponent } from './apartement.component';

describe('ApartementComponent', () => {
  let component: ApartementComponent;
  let fixture: ComponentFixture<ApartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
