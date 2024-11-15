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

  nota1: number | null = null;
  nota2: number | null = null;
  resultadoPromedio: number | null = null;

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
    let datos_recibidos_servicio: number;
    datos_recibidos_servicio = this.pruebaSrv.promedio(1, 6);

    if (datos_recibidos_servicio > 4) {
      console.log("Aprobaste con promedio: " + datos_recibidos_servicio);
    } 
    else if (datos_recibidos_servicio == 4) {
      console.log("Aprobaste con promedio mínimo: " + datos_recibidos_servicio);
    } 
    else {
      console.log("Reprobaste con promedio: " + datos_recibidos_servicio);
    }
  }

  activar_promedio2() {
    let num1 = Number(this.nota1);
    let num2 = Number(this.nota2);
  
    // Verificar que las 2 notas sean numeros
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Por favor, ingresa numeros validos para las notas.");
      return; // parar la ejecucion si alguna nota no es correcta
    }
  
    this.resultadoPromedio = this.pruebaSrv.promedio(num1, num2);
  
    // Mostrar el mensaje del promedio
    if (this.resultadoPromedio > 4) {
      console.log("Aprobaste con promedio: " + this.resultadoPromedio);
    } 
    else if (this.resultadoPromedio == 4) {
      console.log("Aprobaste con promedio mínimo: " + this.resultadoPromedio);
    } 
    else {
      console.log("Reprobaste con promedio: " + this.resultadoPromedio);
    }
  }
  
}



