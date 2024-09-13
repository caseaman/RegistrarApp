import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  email: string = '';

  constructor(private router: Router) {}

  Restablecer() {
    if (this.email) {
      alert('Se ha enviado un correo a ' + this.email + ' para restablecer la contraseña.');
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, ingresa un correo válido.');
    }
  }

  validaremail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

} 
