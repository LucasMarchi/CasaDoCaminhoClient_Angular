import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Beneficiario } from '../models/beneficiario';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficiarioService } from '../beneficiarios.service';
import { Familiar } from '../models/familiar';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-beneficiario-familiares',
  templateUrl: './beneficiario-familiares.component.html',
  styleUrls: ['./beneficiario-familiares.component.css']
})
export class BeneficiarioFamiliaresComponent implements OnInit {

  @Input() beneficiario: Beneficiario;
  @Input() familiar: Familiar;

  constructor(
    private route: ActivatedRoute,
    private beneficiarioService: BeneficiarioService,
    private router: Router,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.getBeneficiario();
    this.familiar = new Familiar();
  }

  getBeneficiario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beneficiarioService.getById(id)
      .subscribe(beneficiario => {
        this.beneficiario = beneficiario;
        if (this.beneficiario.familiares == null) this.beneficiario.familiares = new Array<Familiar>();
      });
  }

  adicionarFamiliar(event) {
    event.preventDefault();
    this.beneficiario.familiares.push(this.familiar);
    this.familiar = new Familiar();
  }

  editar(familiar: Familiar, event){
    event.preventDefault();
    this.familiar = familiar;
    this.beneficiario.familiares = this.utilService.remove(this.beneficiario.familiares, familiar);
  }

  remover(familiar: Familiar, event){
    event.preventDefault();
    this.beneficiario.familiares = this.utilService.remove(this.beneficiario.familiares, familiar);
  }

  update(): void {
    console.log(this.beneficiario);
    this.beneficiarioService.update(this.beneficiario)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/beneficiarios']);
  }


}
