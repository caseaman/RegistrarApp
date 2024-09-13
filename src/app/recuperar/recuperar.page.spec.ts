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
      // Simulación de restablecimiento de contraseña
      alert('Se ha enviado un correo a ' + this.email + ' para restablecer la contraseña.');
      // Redireccionar a la página de login después del restablecimiento
      this.router.navigate(['/login']);
    } else {
      // Mostrar alerta si el campo de correo electrónico está vacío
      alert('Por favor, ingresa un correo válido.');
    }
  }
}
