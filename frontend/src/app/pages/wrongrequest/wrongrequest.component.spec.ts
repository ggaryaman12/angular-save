import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongrequestComponent } from './wrongrequest.component';

describe('WrongrequestComponent', () => {
  let component: WrongrequestComponent;
  let fixture: ComponentFixture<WrongrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
