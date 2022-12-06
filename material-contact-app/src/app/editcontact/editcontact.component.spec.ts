import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '../app-routing.module';

import { EditcontactComponent } from './editcontact.component';

describe('EditcontactComponent', () => {
  let component: EditcontactComponent;
  let fixture: ComponentFixture<EditcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcontactComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule, MatSnackBarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
