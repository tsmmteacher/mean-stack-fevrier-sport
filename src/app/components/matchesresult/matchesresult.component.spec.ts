import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesresultComponent } from './matchesresult.component';

describe('MatchesresultComponent', () => {
  let component: MatchesresultComponent;
  let fixture: ComponentFixture<MatchesresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
