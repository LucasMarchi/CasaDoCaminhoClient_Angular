import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doacao } from '../models/doacao';
import { DoacaoService } from '../doacao.service';
import { Item } from '../models/item';
import { UtilService } from '../util.service';
import { Doador } from '../models/doador';
import { DoadorService } from '../doador.service';
import { MatSnackBar } from '@angular/material';
import { CPF, CNPJ } from '../consts/utils.const';
import { NotfoundSnackbarComponent } from '../notfound-snackbar/notfound-snackbar.component';

@Component({
  selector: 'app-doacao-detalhe',
  templateUrl: './doacao-detalhe.component.html',
  styleUrls: ['./doacao-detalhe.component.css']
})
export class DoacaoDetalheComponent implements OnInit {

  @Input() doacao: Doacao;
  @Input() item: Item = new Item();
  formulario: FormGroup;
  public mask = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private doacaoService: DoacaoService,
    private doadorService: DoadorService,
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    public snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  onDocumentoChange() {
    if (this.mask == CPF) {
      this.mask = CNPJ;
    } else {
      this.mask = CPF;
    }
  }

  ngOnInit() {
    this.getDoacao();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      doadorDocumento: ['', Validators.required],
      doadorTipo: [''],
      itemNome: [''],
      quantidade: ['']
    });
  }

  getDoacao(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doacaoService.getById(id)
      .subscribe(doacao => {
        this.doacao = doacao;
        this.doacao.doador.tipo == 'Física' ? this.mask = CPF : this.mask = CNPJ;
        if (this.doacao.itens == null) this.doacao.itens = new Array<Item>();
      });
  }

  update(): void {

    this.doadorService.getByDocumento(this.doacao.doador.documento, this.doacao.doador.tipo)
      .subscribe(doador => {
        console.log("doador..." + doador);
        if (doador != null) {
          this.doacao.doador = doador;
          this.doacaoService.update(this.doacao)
            .subscribe(() => this.goBack());
        }else{
          this.openSnackBar();
        }
      });

  }

  adicionarItem(event) {
    event.preventDefault();
    this.doacao.itens.push(this.item);
    this.item = new Item();
  }

  editar(item: Item, event) {
    event.preventDefault();
    this.item = item;
    this.doacao.itens = this.utilService.remove(this.doacao.itens, item);
  }

  remover(item: Item, event) {
    event.preventDefault();
    this.doacao.itens = this.utilService.remove(this.doacao.itens, item);
  }

  openSnackBar() {
    this.snackBar.openFromComponent(NotfoundSnackbarComponent, {
      duration: 5000,
    });
  }

  goBack(): void {
    this.router.navigate(['/doacoes']);
  }

}
