import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestionPageComponent } from './ingestion-page.component';

describe('IngestionPageComponent', () => {
  let component: IngestionPageComponent;
  let fixture: ComponentFixture<IngestionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngestionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
