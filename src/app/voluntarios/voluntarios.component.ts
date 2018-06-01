import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Voluntario } from '../models/voluntario'; '../models/voluntario';
import { VoluntarioService } from '../voluntario.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {
  displayedColumns = ['nome', 'cpf', 'telefone', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Voluntario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private voluntarioService: VoluntarioService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getVoluntarios();
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
