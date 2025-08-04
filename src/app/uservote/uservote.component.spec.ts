import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UservoteComponent } from './uservote.component';

describe('UservoteComponent', () => {
  let component: UservoteComponent;
  let fixture: ComponentFixture<UservoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UservoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UservoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
