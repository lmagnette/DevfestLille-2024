import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFilesIngestionComponent } from './local-files-ingestion.component';

describe('LocalFilesIngestionComponent', () => {
  let component: LocalFilesIngestionComponent;
  let fixture: ComponentFixture<LocalFilesIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalFilesIngestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalFilesIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
