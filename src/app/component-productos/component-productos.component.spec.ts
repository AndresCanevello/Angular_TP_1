import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProductosComponent } from './component-productos.component';

describe('ComponentProductosComponent', () => {
  let component: ComponentProductosComponent;
  let fixture: ComponentFixture<ComponentProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
