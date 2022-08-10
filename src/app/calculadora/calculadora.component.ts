import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  buffering = '0';
  n1: number | null | undefined;
  n2: number | null | undefined;
  operacao: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  pressionar(numero: string): void {

    if (this.buffering === '0') {
      this.buffering = numero;
    } else {
      this.buffering += numero;
    }
  }


  negativar(): void {
    this.buffering = String(Number(this.buffering) * -1);
  }

  calcular(): void {
    this.n2 = Number(this.buffering);
    this.buffering = this.operacao(this.n1, this.n2);
  }

  limpar(): void {
    this.buffering = '0';
  }

  resetar(): void {
    this.buffering = '0';
    this.operacao = null;
    this.n1 = null;
    this.n2 = null;
  }

  apagar(): void {
    this.buffering = this.buffering.slice(0, -1);
  }

  multiplicar(): void {
    this.atribuir();
    this.operacao = (n1: number, n2: number) => n1 * n2;
  }

  somar(): void {
    this.atribuir();
    this.operacao = (n1: number, n2: number) => n1 + n2;
  }

  dividir(): void {
    this.atribuir();
    this.operacao = (n1: number, n2: number) => n1 / n2;
  }

  subtrair(): void {
    this.atribuir();
    this.operacao = (n1: number, n2: number) => n1 - n2;
  }

  atribuir(): void {
    this.n1 = Number(this.buffering);
    this.buffering = '';
  }
}
