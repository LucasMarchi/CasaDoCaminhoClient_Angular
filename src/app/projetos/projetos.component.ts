import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Projeto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private projetoService: ProjetoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.projetoService.getAll()
    .subscribe(projetos => {
      this.dataSource = new MatTableDataSource(projetos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  excluir(id: number): void{
    this.projetoService.delete(id)
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
