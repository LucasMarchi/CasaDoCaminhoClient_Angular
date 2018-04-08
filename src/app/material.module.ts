import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
  MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule ],
})
export class MaterialModule { }
