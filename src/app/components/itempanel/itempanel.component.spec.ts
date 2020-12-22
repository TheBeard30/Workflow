import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempanelComponent } from './itempanel.component';

describe('ItempanelComponent', () => {
  let component: ItempanelComponent;
  let fixture: ComponentFixture<ItempanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItempanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItempanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
