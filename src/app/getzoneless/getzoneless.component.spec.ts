import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetzonelessComponent } from './getzoneless.component';

describe('GetzonelessComponent', () => {
  let component: GetzonelessComponent;
  let fixture: ComponentFixture<GetzonelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetzonelessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetzonelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
