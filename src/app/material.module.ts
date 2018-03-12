import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule ],
})
export class MaterialModule { }
