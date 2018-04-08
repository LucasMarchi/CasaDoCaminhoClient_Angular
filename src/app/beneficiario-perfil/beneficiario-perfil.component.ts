import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Beneficiario } from '../models/beneficiario'; '../models/beneficiario';
import { BeneficiarioService } from '../beneficiarios.service';
import { Perfil } from '../models/perfil';

@Component({
  selector: 'app-beneficiario-perfil',
  templateUrl: './beneficiario-perfil.component.html',
  styleUrls: ['./beneficiario-perfil.component.css']
})
export class BeneficiarioPerfilComponent implements OnInit {

  @Input() beneficiario: Beneficiario;

  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private beneficiarioService: BeneficiarioService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getBeneficiario();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      escolaridade: ['', Validators.required]
    });
  }

  getBeneficiario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beneficiarioService.getById(id)
      .subscribe(beneficiario => {
        this.beneficiario = beneficiario;
        if(this.beneficiario.perfil == null) this.beneficiario.perfil = new Perfil();
      });
  }

  update(): void {
    this.beneficiarioService.update(this.beneficiario)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
