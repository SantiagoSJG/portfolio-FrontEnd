import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private routes: Router) {}

  @Input('fotoPerfil') fotoPerfil: ElementRef;

  ngOnInit() {}

  modalAbierto: boolean = false;

  abrirModal() {
    this.routes.navigate(['/header/cambiar-foto']);
    this.modalAbierto = true;
    if (this.modalAbierto) {
      console.log(window.screenLeft, window.screenTop);
    }
  }
}
