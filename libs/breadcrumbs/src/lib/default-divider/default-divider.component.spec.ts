import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDividerComponent } from './default-divider.component';

describe('DefaultDividerComponent', () => {
  let component: DefaultDividerComponent;
  let fixture: ComponentFixture<DefaultDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
