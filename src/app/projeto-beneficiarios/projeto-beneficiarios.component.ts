import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Beneficiario } from '../models/beneficiario';
import { BeneficiarioService } from '../beneficiarios.service';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../projeto.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-projeto-beneficiarios',
  templateUrl: './projeto-beneficiarios.component.html',
  styleUrls: ['./projeto-beneficiarios.component.css']
})
export class ProjetoBeneficiariosComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'cpf', 'associar_desassociar'];
  dataSourceBeneficiariosAssociados: MatTableDataSource<Beneficiario>;
  dataSourceBeneficiariosNaoAssociados: MatTableDataSource<Beneficiario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() projeto: Projeto;
  beneficiariosNaoAssociados: Beneficiario[];

  constructor(private beneficiarioService: BeneficiarioService, private projetoService: ProjetoService,private utilService: UtilService) { }

  ngOnInit() {
    this.dataSourceBeneficiariosAssociados = new MatTableDataSource(this.projeto.beneficiarios);
    this.getBeneficiariosNaoAssociados();
  }

  getBeneficiariosNaoAssociados(): void {
    this.projetoService.getBeneficiariosNaoAssociados(this.projeto.id)
    .subscribe(beneficiarios => {
      this.beneficiariosNaoAssociados = beneficiarios;
      this.dataSourceBeneficiariosNaoAssociados = new MatTableDataSource(this.beneficiariosNaoAssociados);
      this.dataSourceBeneficiariosNaoAssociados.paginator = this.paginator;
      this.dataSourceBeneficiariosNaoAssociados.sort = this.sort;
    });
    
  }

  associar(beneficiario: Beneficiario, event): void{
    event.preventDefault();
    this.beneficiariosNaoAssociados = this.utilService.remove(this.beneficiariosNaoAssociados, beneficiario);
    this.projeto.beneficiarios.push(beneficiario);
    this.dataSourceBeneficiariosNaoAssociados = new MatTableDataSource(this.beneficiariosNaoAssociados);
    this.dataSourceBeneficiariosAssociados = new MatTableDataSource(this.projeto.beneficiarios);
  }

  desassociar(beneficiario: Beneficiario, event): void{
    event.preventDefault();
    this.projeto.beneficiarios = this.utilService.remove(this.projeto.beneficiarios, beneficiario);
    this.beneficiariosNaoAssociados.push(beneficiario);
    this.dataSourceBeneficiariosNaoAssociados = new MatTableDataSource(this.beneficiariosNaoAssociados);
    this.dataSourceBeneficiariosAssociados = new MatTableDataSource(this.projeto.beneficiarios);
  }

  applyFilterAssociados(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceBeneficiariosAssociados.filter = filterValue;
  }

  applyFilterNaoAssociados(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceBeneficiariosNaoAssociados.filter = filterValue;
  }

}
