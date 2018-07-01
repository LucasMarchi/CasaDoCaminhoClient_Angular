import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Familiar } from '../models/familiar';
import { RelatorioService } from '../relatorio.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-relatorio-familiares',
  templateUrl: './relatorio-familiares.component.html',
  styleUrls: ['./relatorio-familiares.component.css']
})
export class RelatorioFamiliaresComponent implements OnInit {

  displayedColumns = ['nome', 'idade', 'tamanhoCalcado'];
  dataSource: MatTableDataSource<Familiar>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() familiar: Familiar;

  constructor(private relatorioService: RelatorioService) { }

  ngOnInit() {
    this.familiar = new Familiar();
  }

  buscarFamiliares(event) {
    event.preventDefault();
    this.relatorioService.buscarFamiliares(this.familiar)
    .subscribe(familiar => {
      this.dataSource = new MatTableDataSource(familiar);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
