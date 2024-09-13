import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  apellido: string = '';
  Carrera: string = '';
  fechaNacimiento: string = '';

  constructor(private alertController: AlertController) {}

  limpiarFormulario() {
    this.nombre = '';
    this.apellido = '';
    this.Carrera= '';
    this.fechaNacimiento = '';
  }

  async registrar() {
    
    // Por ahora, solo mostramos la información en una alerta.
    await this.mostrarInformacion();
  }

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre} <br> Apellido: ${this.apellido} <br> Nivel Educación: ${this.Carrera} <br> Fecha Nacimiento: ${this.fechaNacimiento}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
