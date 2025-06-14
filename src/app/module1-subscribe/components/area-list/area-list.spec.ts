import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaListComponent } from './area-list';

describe('AreaListComponent', () => {
  let component: AreaListComponent;
  let fixture: ComponentFixture<AreaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
