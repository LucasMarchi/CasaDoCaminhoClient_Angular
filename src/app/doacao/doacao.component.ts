import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Doacao } from '../models/doacao'; '../models/doacao';
import { DoacaoService } from '../doacao.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  displayedColumns = ['doador', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Doacao>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private doacaoService: DoacaoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getDoacoes();
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

  getDoacoes(): void {
    this.doacaoService.getAll()
    .subscribe(doacoes => {
      this.dataSource = new MatTableDataSource(doacoes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  excluir(id: number): void{
    this.doacaoService.delete(id)
    .subscribe(() =>{
      this.getDoacoes();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
