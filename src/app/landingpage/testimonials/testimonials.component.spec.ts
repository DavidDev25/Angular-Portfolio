import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamonialsComponent } from './testimonials.component';

describe('TestamonialsComponent', () => {
  let component: TestamonialsComponent;
  let fixture: ComponentFixture<TestamonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestamonialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestamonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
