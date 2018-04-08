import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Doador } from '../models/doador';
import { DoadorService } from '../doador.service';

@Component({
  selector: 'app-doadores',
  templateUrl: './doadores.component.html',
  styleUrls: ['./doadores.component.css']
})
export class DoadoresComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Doador>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private doadorService: DoadorService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.doadorService.getAll()
    .subscribe(doadores => {
      this.dataSource = new MatTableDataSource(doadores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  excluir(id: number): void{
    this.doadorService.delete(id)
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
