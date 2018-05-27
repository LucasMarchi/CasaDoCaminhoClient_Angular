import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doacao } from '../models/doacao';
import { DoacaoService } from '../doacao.service';
import { Item } from '../models/item';
import { UtilService } from '../util.service';
import { Doador } from '../models/doador';
import { DoadorService } from '../doador.service';

@Component({
  selector: 'app-doacao-detalhe',
  templateUrl: './doacao-detalhe.component.html',
  styleUrls: ['./doacao-detalhe.component.css']
})
export class DoacaoDetalheComponent implements OnInit {

  @Input() doacao: Doacao = new Doacao();
  @Input() item: Item = new Item();
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private doacaoService: DoacaoService,
    private doadorService: DoadorService,
    private location: Location,
    private formBuilder: FormBuilder,
    private utilService: UtilService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getDoacao();
    if (this.doacao.doador == null) this.doacao.doador = new Doador();
    if (this.doacao.itens == null) this.doacao.itens = new Array<Item>();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      documento: ['', Validators.required],
      nome: [''],
      quantidade: ['']
    });
  }

  getDoacao(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doacaoService.getById(id)
      .subscribe(doacao => this.doacao = doacao);
  }

  update(): void {
    this.doacaoService.update(this.doacao)
      .subscribe(() => this.goBack());
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

  goBack(): void {
    this.location.back();
  }

}
