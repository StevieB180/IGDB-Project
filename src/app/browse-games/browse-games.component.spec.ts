import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseGamesComponent } from './browse-games.component';

describe('BrowseGamesComponent', () => {
  let component: BrowseGamesComponent;
  let fixture: ComponentFixture<BrowseGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
