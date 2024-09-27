import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  Carrera: string = '';
  fechaNacimiento: string = '';
  email: string = '';  // Para almacenar el email del usuario

  constructor(private route: ActivatedRoute, private alertController: AlertController) {}

  ngOnInit() {
    // Obtener el email desde los queryParams al cargar la página
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];  // Asignar el email al campo de la clase
      }
    });
  }

  limpiarFormulario() {
    this.nombre = '';
    this.apellido = '';
    this.Carrera= '';
    this.fechaNacimiento = '';
  }

  async registrar() {
    // Validar que los campos no estén vacíos
    if (this.nombre && this.apellido && this.Carrera && this.fechaNacimiento) {
      // Mostrar la información ingresada
      await this.mostrarInformacion();
    } else {
      // Mostrar una alerta si faltan campos
      await this.mostrarError();
    }
  }

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre} <br> Apellido: ${this.apellido} <br> Nivel Educación: ${this.Carrera} <br> Fecha Nacimiento: ${this.fechaNacimiento}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  // Mostrar error si faltan campos
  async mostrarError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Por favor, completa todos los campos.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
