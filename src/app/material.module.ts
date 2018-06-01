import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
  MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
  MatRadioModule, MatTabsModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
    MatRadioModule, MatTabsModule, MatDialogModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
    MatRadioModule, MatTabsModule, MatDialogModule ],
})
export class MaterialModule { }
