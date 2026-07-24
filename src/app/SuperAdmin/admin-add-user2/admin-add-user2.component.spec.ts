import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddUser2Component } from './admin-add-user2.component';

describe('AdminAddUser2Component', () => {
  let component: AdminAddUser2Component;
  let fixture: ComponentFixture<AdminAddUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddUser2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
