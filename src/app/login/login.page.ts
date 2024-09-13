import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router
import { AlertController } from '@ionic/angular'; // Importa AlertController para manejar mensajes

interface IuserInfo {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  email: string = "";
  password: string = "";
  userInfo: IuserInfo | null = null;

  // Inyectar Router en el constructor
  constructor(private router: Router, private alertController: AlertController) {}

  userLogin() {
    if (this.validaremail(this.email) && this.password) {
      setTimeout(() => {
        this.router.navigate(['/home']);  // Redirigir al Home después de 2 segundos
      }, 2000);
      // Se guarda la información del usuario en la variable userInfo
      this.userInfo = {
        email: this.email,
        password: this.password
      };
    } else {
      // Mostrar un mensaje en caso de que falte alguno de los campos
      this.presentAlert(); // Llama a la función para mostrar la alerta
    }
  }

  // Función para validar el formato del correo electrónico
  validaremail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Función para mostrar alerta si faltan campos o el formato es incorrecto
  async presentAlert() {
    let message = 'Por favor, ingresa un correo electrónico y una contraseña válidos.';
    if (!this.validaremail(this.email)) {
      message = 'Por Favor introduce un correo electronico.';
    }

    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
