import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';

import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryComponent } from './diary/diary.component';
import { ListEntriesComponent } from './list-entries/list-entries.component';
import { NewItemButtonComponent } from './new-item-button/new-item-button.component';

@NgModule({
  declarations: [DiaryComponent, EntryItemComponent, ListEntriesComponent, NewItemButtonComponent],
  imports: [CommonModule, DiaryRoutingModule],
})
export class DiaryModule {}
