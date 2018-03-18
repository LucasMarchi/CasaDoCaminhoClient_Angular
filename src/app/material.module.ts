import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
  MatSortModule, MatInputModule, MatOptionModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule ],
})
export class MaterialModule { }
