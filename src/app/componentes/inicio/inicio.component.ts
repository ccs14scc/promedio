import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PruebaService } from '../../servicios/prueba/prueba.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  formularioForm;
  // Permitir que las notas puedan ser de tipo 'number' o 'null'
  nota1: number | null = null; // Ahora puede ser un número o null
  nota2: number | null = null; // Lo mismo aquí
  resultadoPromedio: number | null = null;
  mostrarMensajeError: boolean = false;

  constructor(private formBuilder: FormBuilder, private pruebaSrv: PruebaService) {
    this.formularioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log("hola");
  }

  enviarDatos() {
    let datos_formulario = this.formularioForm.value;
    console.log(datos_formulario);
    console.warn('Los datos capturados son:', this.formularioForm.value);
    this.formularioForm.reset();
  }

  // Activar funciones invocables
  activar_invocable1() {
    let dato_recibidos_servicio = this.pruebaSrv.invocable_1();
    console.log(dato_recibidos_servicio);
  }

  activar_invocable2() {
    let dato_recibidos_servicio = this.pruebaSrv.invocable_2();
    console.log(dato_recibidos_servicio);
  }

  activar_invocable3() {
    let dato_recibidos_servicio = this.pruebaSrv.invocable_3();
    console.log(dato_recibidos_servicio);
  }

  activar_sumar() {
    let dato_recibidos_servicio = this.pruebaSrv.sumar(5);
    console.log(dato_recibidos_servicio);
  }

  activar_promedio() {
    // Asegurarse de que ambas notas sean válidas y no nulas
    if (this.nota1 != null && this.nota2 != null) {
      this.mostrarMensajeError = false; // Ocultar el mensaje de error si ambas notas son válidas
      this.resultadoPromedio = this.pruebaSrv.promedio(this.nota1, this.nota2);
      if (this.resultadoPromedio > 7) {
        console.log("Aprobaste con promedio: " + this.resultadoPromedio);
      } else if (this.resultadoPromedio === 4) {
        console.log("Aprobaste con promedio mínimo: " + this.resultadoPromedio);
      } else {
        console.log("Reprobaste: " + this.resultadoPromedio);
      }
    } else {
      this.mostrarMensajeError = true; // Mostrar el mensaje de error si alguna de las notas es nula
    }
  }
}
