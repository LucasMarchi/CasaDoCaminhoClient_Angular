import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Voluntario } from '../models/voluntario'; '../models/voluntario';
import { VoluntarioService } from '../voluntario.service';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../projeto.service';
import { UtilService } from '../util.service';
import { utils } from 'protractor';

@Component({
  selector: 'app-projeto-voluntarios',
  templateUrl: './projeto-voluntarios.component.html',
  styleUrls: ['./projeto-voluntarios.component.css']
})
export class ProjetoVoluntariosComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'cpf', 'excluir'];
  dataSourceVoluntariosAssociados: MatTableDataSource<Voluntario>;
  dataSourceVoluntariosNaoAssociados: MatTableDataSource<Voluntario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() projeto: Projeto;
  voluntariosNaoAssociados: Voluntario[];

  constructor(private voluntarioService: VoluntarioService, private projetoService: ProjetoService,private utilService: UtilService) { }

  ngOnInit() {
    this.dataSourceVoluntariosAssociados = new MatTableDataSource(this.projeto.voluntarios);
    this.getVoluntariosNaoAssociados();
  }

  getVoluntariosNaoAssociados(): void {
    this.projetoService.getVoluntariosNaoAssociados(this.projeto.id)
    .subscribe(voluntarios => {
      this.voluntariosNaoAssociados = voluntarios;
      this.dataSourceVoluntariosNaoAssociados = new MatTableDataSource(this.voluntariosNaoAssociados);
      this.dataSourceVoluntariosNaoAssociados.paginator = this.paginator;
      this.dataSourceVoluntariosNaoAssociados.sort = this.sort;
    });
    
  }

  associar(voluntario: Voluntario, event): void{
    event.preventDefault();
    this.voluntariosNaoAssociados = this.utilService.remove(this.voluntariosNaoAssociados, voluntario);
    this.projeto.voluntarios.push(voluntario);
    this.dataSourceVoluntariosNaoAssociados = new MatTableDataSource(this.voluntariosNaoAssociados);
    this.dataSourceVoluntariosAssociados = new MatTableDataSource(this.projeto.voluntarios);
  }

  desassociar(voluntario: Voluntario, event): void{
    event.preventDefault();
    this.projeto.voluntarios = this.utilService.remove(this.projeto.voluntarios, voluntario);
    this.voluntariosNaoAssociados.push(voluntario);
    this.dataSourceVoluntariosNaoAssociados = new MatTableDataSource(this.voluntariosNaoAssociados);
    this.dataSourceVoluntariosAssociados = new MatTableDataSource(this.projeto.voluntarios);
  }

  applyFilterAssociados(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceVoluntariosAssociados.filter = filterValue;
  }

  applyFilterNaoAssociados(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceVoluntariosNaoAssociados.filter = filterValue;
  }

}
