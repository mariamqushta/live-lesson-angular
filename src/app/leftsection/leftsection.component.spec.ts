import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsectionComponent } from './leftsection.component';

describe('LeftsectionComponent', () => {
  let component: LeftsectionComponent;
  let fixture: ComponentFixture<LeftsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
