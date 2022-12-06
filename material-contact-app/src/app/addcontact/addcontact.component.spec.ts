import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AddcontactComponent } from './addcontact.component';

describe('AddcontactComponent', () => {
  let component: AddcontactComponent;
  let fixture: ComponentFixture<AddcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcontactComponent],
      imports: [HttpClientModule, MatSnackBarModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text as "Add New Contact"', () => {
    expect(component.heading).toEqual('Add New Contact');
  })

  it('should have button text as "Add Contact"', () => {
    const element = fixture.nativeElement as HTMLElement
    expect(element.querySelector('.myclass')?.textContent).toContain('Lorem ipsum dolor sit amet.');
  })

});
