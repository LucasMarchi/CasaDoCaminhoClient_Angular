import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
  MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
  MatRadioModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
    MatRadioModule, MatTabsModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, 
    MatSortModule, MatInputModule, MatOptionModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatExpansionModule,
    MatRadioModule, MatTabsModule ],
})
export class MaterialModule { }
