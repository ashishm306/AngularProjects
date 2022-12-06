import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FaqComponent } from '../faq/faq.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
]

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    FaqComponent
  ]
})
export class GeneralModule {
  constructor() {
    console.log('General Module Loaded')
  }
}
