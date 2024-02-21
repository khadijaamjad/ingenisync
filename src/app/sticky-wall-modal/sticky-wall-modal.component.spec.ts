import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyWallModalComponent } from './sticky-wall-modal.component';

describe('StickyWallModalComponent', () => {
  let component: StickyWallModalComponent;
  let fixture: ComponentFixture<StickyWallModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyWallModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickyWallModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
