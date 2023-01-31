import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductComponent } from './filter-product.component';

describe('FilterProductComponent', () => {
  let component: FilterProductComponent;
  let fixture: ComponentFixture<FilterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
