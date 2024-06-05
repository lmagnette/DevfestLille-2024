import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileIngestionComponent } from './file-ingestion.component';

describe('FileIngestionComponent', () => {
  let component: FileIngestionComponent;
  let fixture: ComponentFixture<FileIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileIngestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
