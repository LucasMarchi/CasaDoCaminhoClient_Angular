import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../projeto.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  displayedColumns = ['nome', 'equipeExecutora', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Projeto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private projetoService: ProjetoService, public dialog: MatDialog) { }

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
