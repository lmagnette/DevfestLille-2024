import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageSourcesComponent } from './chat-message-sources.component';

describe('ChatMessageSourcesComponent', () => {
  let component: ChatMessageSourcesComponent;
  let fixture: ComponentFixture<ChatMessageSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessageSourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatMessageSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
