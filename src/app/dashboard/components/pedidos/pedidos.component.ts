import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  form!: FormGroup;

  pedidosData = [{}, {}, {}, {}, {}];

  constructor(private fb: FormBuilder) {
    this.createForm();
    for (let index = 0; index < this.pedidosData.length; index++) {
      this.addPedido();
    }
  }

  ngOnInit(): void {}

  createForm() {
    this.form = this.fb.group({
      pedidos: this.fb.array([]),
    });
  }
  get pedidos(): FormArray {
    return this.form.get('pedidos') as FormArray;
  }

  addPedido() {
    const trabajo = this.fb.group({
      cantidad: [''],
    });

    this.pedidos.push(trabajo);
    console.log(this.form.value);
  }

  // get lessons(): FormArray {
  //   return this.form.controls['lessons'] as FormArray;
  // }

  // addLesson() {
  //   const lessonForm = this.fb.group({
  //     title: [',', Validators.required],
  //   });

  //   this.lessons.push(lessonForm);
  //   console.log('hola');
  // }

  verData(): void {
    console.log(this.form.value);
  }
}
