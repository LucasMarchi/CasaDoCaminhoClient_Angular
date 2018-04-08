import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Voluntario } from '../models/voluntario'; '../models/voluntario';
import { VoluntarioService } from '../voluntario.service';


@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'cpf', 'telefone', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Voluntario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private voluntarioService: VoluntarioService) { }

  ngOnInit() {
    this.getVoluntarios();
  }

  getVoluntarios(): void {
    this.voluntarioService.getVoluntarios()
    .subscribe(voluntarios => {
      this.dataSource = new MatTableDataSource(voluntarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  excluir(id: number): void{
    this.voluntarioService.deleteVoluntario(id)
    .subscribe(() =>{
      this.getVoluntarios();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
