import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Beneficiario } from '../models/beneficiario';
import { BeneficiarioService } from '../beneficiarios.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.css']
})
export class BeneficiariosComponent implements OnInit {

  displayedColumns = ['nome', 'cpf', 'telefone', 'familiares', 'perfil', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Beneficiario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private beneficiarioService: BeneficiarioService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAll();
  }

  openDialog(id: number): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(resposta => {
      console.log(resposta);
      if(resposta != null) this.excluir(id);
    });
  }
  
  getAll(): void {
    this.beneficiarioService.getAll()
    .subscribe(beneficiarios => {
      this.dataSource = new MatTableDataSource(beneficiarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  excluir(id: number): void{
    this.beneficiarioService.delete(id)
    .subscribe(() =>{
      this.getAll();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}
