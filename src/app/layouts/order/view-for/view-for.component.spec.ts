import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewForComponent } from './view-for.component';

describe('ViewForComponent', () => {
  let component: ViewForComponent;
  let fixture: ComponentFixture<ViewForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
