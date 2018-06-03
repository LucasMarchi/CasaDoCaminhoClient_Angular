import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
  MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
  MatRadioModule, MatTabsModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
    MatRadioModule, MatTabsModule, MatDialogModule, MatSnackBarModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
    MatRadioModule, MatTabsModule, MatDialogModule, MatSnackBarModule ],
})
export class MaterialModule { }
