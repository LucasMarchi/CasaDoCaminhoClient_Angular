import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Doador } from '../models/doador'; '../models/doador';
import { DoadorService } from '../doador.service';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../projeto.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-projeto-doadores',
  templateUrl: './projeto-doadores.component.html',
  styleUrls: ['./projeto-doadores.component.css']
})
export class ProjetoDoadoresComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'associar_desassociar'];
  dataSourceDoadoresAssociados: MatTableDataSource<Doador>;
  dataSourceDoadoresNaoAssociados: MatTableDataSource<Doador>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() projeto: Projeto;
  doadoresNaoAssociados: Doador[];

  constructor(private doadorService: DoadorService, private projetoService: ProjetoService,private utilService: UtilService) { }

  ngOnInit() {
    this.dataSourceDoadoresAssociados = new MatTableDataSource(this.projeto.doadores);
    this.getDoadoresNaoAssociados();
  }

  getDoadoresNaoAssociados(): void {
    this.projetoService.getDoadoresNaoAssociados(this.projeto.id)
    .subscribe(doadores => {
      this.doadoresNaoAssociados = doadores;
      this.dataSourceDoadoresNaoAssociados = new MatTableDataSource(this.doadoresNaoAssociados);
      this.dataSourceDoadoresNaoAssociados.paginator = this.paginator;
      this.dataSourceDoadoresNaoAssociados.sort = this.sort;
    });
    
  }

  associar(doador: Doador, event): void{
    event.preventDefault();
    this.doadoresNaoAssociados = this.utilService.remove(this.doadoresNaoAssociados, doador);
    this.projeto.doadores.push(doador);
    this.dataSourceDoadoresNaoAssociados = new MatTableDataSource(this.doadoresNaoAssociados);
    this.dataSourceDoadoresAssociados = new MatTableDataSource(this.projeto.doadores);
  }

  desassociar(doador: Doador, event): void{
    event.preventDefault();
    this.projeto.doadores = this.utilService.remove(this.projeto.doadores, doador);
    this.doadoresNaoAssociados.push(doador);
    this.dataSourceDoadoresNaoAssociados = new MatTableDataSource(this.doadoresNaoAssociados);
    this.dataSourceDoadoresAssociados = new MatTableDataSource(this.projeto.doadores);
  }

  applyFilterAssociados(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceDoadoresAssociados.filter = filterValue;
  }

  applyFilterNaoAssociados(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceDoadoresNaoAssociados.filter = filterValue;
  }

}
