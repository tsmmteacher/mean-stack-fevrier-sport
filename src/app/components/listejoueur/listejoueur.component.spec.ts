import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListejoueurComponent } from './listejoueur.component';

describe('ListejoueurComponent', () => {
  let component: ListejoueurComponent;
  let fixture: ComponentFixture<ListejoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListejoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListejoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
