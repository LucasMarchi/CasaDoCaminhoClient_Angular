import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doador } from '../models/doador';
import { DoadorService } from '../doador.service';
import { CPF, CNPJ } from '../consts/utils.const';

@Component({
  selector: 'app-doador-detalhe',
  templateUrl: './doador-detalhe.component.html',
  styleUrls: ['./doador-detalhe.component.css']
})
export class DoadorDetalheComponent implements OnInit {

  @Input() doador: Doador;
  formulario: FormGroup;
  public mask = null;

  constructor(
    private route: ActivatedRoute,
    private doadorService: DoadorService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getDoador();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      tipo: ['', Validators.required],
      nome: ['', Validators.required],
      documento: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onDocumentoChange() {
    if (this.mask == CPF) {
      this.mask = CNPJ;
    } else {
      this.mask = CPF;
    }
  }
  
  getDoador(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doadorService.getById(id)
      .subscribe(doador => {
        this.doador = doador;
        this.mask = this.doador.tipo == 'Física' ? CPF : CNPJ; 
      });
  }

  update(): void {
    this.doadorService.update(this.doador)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/doadores']);
  }

}
