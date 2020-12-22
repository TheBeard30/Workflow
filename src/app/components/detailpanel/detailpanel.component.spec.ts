import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpanelComponent } from './detailpanel.component';

describe('DetailpanelComponent', () => {
  let component: DetailpanelComponent;
  let fixture: ComponentFixture<DetailpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
