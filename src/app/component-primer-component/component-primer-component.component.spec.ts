import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPrimerComponentComponent } from './component-primer-component.component';

describe('ComponentPrimerComponentComponent', () => {
  let component: ComponentPrimerComponentComponent;
  let fixture: ComponentFixture<ComponentPrimerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPrimerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPrimerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
