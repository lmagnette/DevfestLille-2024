import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestedResourcesComponent } from './ingested-resources.component';

describe('IngestedResourcesComponent', () => {
  let component: IngestedResourcesComponent;
  let fixture: ComponentFixture<IngestedResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngestedResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngestedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
