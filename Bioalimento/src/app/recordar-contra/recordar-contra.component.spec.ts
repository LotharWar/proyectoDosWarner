import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarContraComponent } from './recordar-contra.component';

describe('RecordarContraComponent', () => {
  let component: RecordarContraComponent;
  let fixture: ComponentFixture<RecordarContraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordarContraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
