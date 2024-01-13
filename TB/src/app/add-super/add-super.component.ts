import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  Routes,
} from '@angular/router';
import { Super } from '../super';
import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuperHeroesService } from '../super-heroes.service';
import { ListaSuperHeroesComponent } from '../lista-super-heroes/lista-super-heroes.component';

@Component({
  selector: 'app-add-super',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    ListaSuperHeroesComponent,
    RouterLink,
  ],
  templateUrl: './add-super.component.html',
  styleUrl: './add-super.component.css',
})
export class AddSuperComponent implements OnInit {
  miSuper: Super = new Super();
  @Input() id: number = -1;

  constructor(
    private route: ActivatedRoute,
    public info: SuperHeroesService,
    private instancia: FormBuilder
  ) {}

  formUser = new FormGroup({
    img: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    identidad: new FormControl('', Validators.required),
    poderes: new FormArray([], [Validators.required]),
    debilidades: new FormArray([], [Validators.required]),
    peso: new FormControl('', Validators.required),
    pesoSuper: new FormControl('', Validators.required),
    estatura: new FormControl('', Validators.required),
    estaturaSuper: new FormControl('', Validators.required),
    residencia: new FormControl('', Validators.required),
    afiliacion: new FormArray([], [Validators.required]),
    enemigos: new FormArray([], [Validators.required]),
    origen: new FormControl('', Validators.required),
    personalidad: new FormControl('', Validators.required),
  });

  initFormIngredientes(): FormControl {
    return new FormControl('', [Validators.required]);
  }
  AddForm(x: string): void {
    const refIng = this.formUser.get(x) as FormArray;
    refIng.push(this.initFormIngredientes());
  }

  RemoveForm(x: string): void {
    const refIng = this.formUser.get(x) as FormArray;
    refIng.removeAt(refIng.length - 1);
  }

  // getCtrl(key: string, form: FormGroup): any {
  //   return form.get(key);
  // }

  //gets
  get nombre(): FormControl {
    return this.formUser.get('nombre') as FormControl;
  }
  get img(): FormControl {
    return this.formUser.get('img') as FormControl;
  }

  get identidad(): FormControl {
    return this.formUser.get('identidad') as FormControl;
  }
  get peso(): FormControl {
    return this.formUser.get('peso') as FormControl;
  }
  get pesoSuper(): FormControl {
    return this.formUser.get('pesoSuper') as FormControl;
  }
  get estatura(): FormControl {
    return this.formUser.get('estatura') as FormControl;
  }
  get estaturaSuper(): FormControl {
    return this.formUser.get('estaturaSuper') as FormControl;
  }
  get residencia(): FormControl {
    return this.formUser.get('residencia') as FormControl;
  }
  get origen(): FormControl {
    return this.formUser.get('origen') as FormControl;
  }
  get personalidad(): FormControl {
    return this.formUser.get('personalidad') as FormControl;
  }
  // Getters para acceder a los form arrays
  get poderes() {
    return this.formUser.get('poderes') as FormArray;
  }

  get debilidades() {
    return this.formUser.get('debilidades') as FormArray;
  }

  get afiliacion(): FormArray {
    return this.formUser.get('afiliacion') as FormArray;
  }

  get enemigos(): FormArray {
    return this.formUser.get('enemigos') as FormArray;
  }

  //generar id aleatorio
  generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  enviarFormulario() {
    this.miSuper.personalidad = this.formUser.get('personalidad')?.value ?? '';
    this.miSuper.origen = this.formUser.get('origen')?.value ?? '';
    this.miSuper.img = this.formUser.get('img')?.value ?? '';
    this.miSuper.nombre = this.formUser.get('nombre')?.value ?? '';
    this.miSuper.identidad = this.formUser.get('identidad')?.value ?? '';
    this.miSuper.poderes = this.formUser.get('poderes')?.value ?? [];
    this.miSuper.peso = this.formUser.get('peso')?.value ?? '';
    this.miSuper.pesoSuper = this.formUser.get('pesoSuper')?.value ?? '';
    this.miSuper.estatura = this.formUser.get('estatura')?.value ?? '';
    this.miSuper.estaturaSuper =
      this.formUser.get('estaturaSuper')?.value ?? '';
    this.miSuper.residencia = this.formUser.get('residencia')?.value ?? '';
    this.miSuper.afiliacion = this.formUser.get('afiliacion')?.value ?? [];
    this.miSuper.enemigos = this.formUser.get('enemigos')?.value ?? [];
    this.miSuper.debilidades = this.formUser.get('debilidades')?.value ?? [];

    if (this.id == -1) {
      this.miSuper.id = this.generateUuid();
      this.info.postSuper(this.miSuper);
    } else {
      this.info.putSuper(this.miSuper, this.id);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!isNaN(parseInt(params['id']))) this.id = parseInt(params['id']);
    });

    if (this.id != -1) {
      this.miSuper = this.info.ListaSupers[this.id];
      this.formUser.get('img')?.setValue(this.miSuper.img);
      this.formUser.get('nombre')?.setValue(this.miSuper.nombre);
      this.formUser.get('identidad')?.setValue(this.miSuper.identidad);
      this.formUser.get('peso')?.setValue(this.miSuper.peso);
      this.formUser.get('pesoSuper')?.setValue(this.miSuper.pesoSuper);
      this.formUser.get('estatura')?.setValue(this.miSuper.estatura);
      this.formUser.get('estaturaSuper')?.setValue(this.miSuper.estaturaSuper);
      this.formUser.get('residencia')?.setValue(this.miSuper.residencia);
      this.formUser.get('origen')?.setValue(this.miSuper.origen);
      this.formUser.get('personalidad')?.setValue(this.miSuper.personalidad);
      const Poderes = this.formUser.get('poderes') as FormArray;
      const Debilidades = this.formUser.get('debilidades') as FormArray;
      const Enemigos = this.formUser.get('enemigos') as FormArray;
      const Afiliacion = this.formUser.get('afiliacion') as FormArray;
      Poderes.clear();
      Debilidades.clear();
      Enemigos.clear();
      Afiliacion.clear();
      this.miSuper.poderes.forEach((poder) => {
        Poderes.push(this.instancia.control(poder));
      });
      this.miSuper.debilidades.forEach((debilidad) => {
        Debilidades.push(this.instancia.control(debilidad));
      });
      this.miSuper.enemigos.forEach((enemigo) => {
        Enemigos.push(this.instancia.control(enemigo));
      });
      this.miSuper.afiliacion.forEach((afiliado) => {
        Afiliacion.push(this.instancia.control(afiliado));
      });
    }
  }
}
