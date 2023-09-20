import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchersRoutingModule } from './researchers-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ResearchersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResearchersModule { }
