import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesListComponent } from './sources-list.component';

describe('SourcesListComponent', () => {
  let component: SourcesListComponent;
  let fixture: ComponentFixture<SourcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourcesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
