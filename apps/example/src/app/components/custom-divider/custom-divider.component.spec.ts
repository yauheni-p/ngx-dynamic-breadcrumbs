import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDividerComponent } from './custom-divider.component';

describe('CustomDividerComponent', () => {
  let component: CustomDividerComponent;
  let fixture: ComponentFixture<CustomDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
