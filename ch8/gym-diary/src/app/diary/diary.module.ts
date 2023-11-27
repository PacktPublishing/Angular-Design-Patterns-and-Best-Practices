import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';

import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryComponent } from './diary/diary.component';
import { ListEntriesComponent } from './list-entries/list-entries.component';
import { NewItemButtonComponent } from './new-item-button/new-item-button.component';
import { NewEntryFormTemplateComponent } from './new-entry-form-template/new-entry-form-template.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewEntryFormReactiveComponent } from './new-entry-form-reactive/new-entry-form-reactive.component';

@NgModule({
  declarations: [
    DiaryComponent,
    EntryItemComponent,
    ListEntriesComponent,
    NewItemButtonComponent,
    NewEntryFormTemplateComponent,
    NewEntryFormReactiveComponent,
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DiaryModule {}
