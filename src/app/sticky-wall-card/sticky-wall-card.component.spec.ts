import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyWallCardComponent } from './sticky-wall-card.component';

describe('StickyWallCardComponent', () => {
  let component: StickyWallCardComponent;
  let fixture: ComponentFixture<StickyWallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyWallCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickyWallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
