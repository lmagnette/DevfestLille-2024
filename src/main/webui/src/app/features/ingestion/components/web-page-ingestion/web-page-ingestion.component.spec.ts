import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageIngestionComponent } from './web-page-ingestion.component';

describe('WebPageIngestionComponent', () => {
  let component: WebPageIngestionComponent;
  let fixture: ComponentFixture<WebPageIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPageIngestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebPageIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
