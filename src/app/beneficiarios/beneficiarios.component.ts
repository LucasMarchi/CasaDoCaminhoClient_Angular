import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Beneficiario } from '../models/beneficiario';
import { BeneficiarioService } from '../beneficiarios.service';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.css']
})
export class BeneficiariosComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'cpf', 'telefone', 'familiares', 'perfil', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Beneficiario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private beneficiarioService: BeneficiarioService) { }

  ngOnInit() {
    this.getAll();
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
