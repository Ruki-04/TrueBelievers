export class Super {
  id: string = '0';
  img: string;
  nombre: string;
  identidad: string;
  poderes: Array<string>;
  debilidades: Array<string>;
  peso: string;
  pesoSuper: string;
  estatura: string;
  estaturaSuper: string;
  residencia: string;
  afiliacion: Array<string>;
  enemigos: Array<string>;
  origen: string;
  personalidad: string;

  constructor(
    img: string = '',
    nombre: string = '',
    identidad: string = '',
    poderes: Array<string> = [],
    debilidades: Array<string> = [],
    peso: string = '',
    pesoSuper: string = '',
    estatura: string = '',
    estaturaSuper: string = '',
    residencia: string = '',
    afiliacion: Array<string> = [],
    enemigos: Array<string> = [],
    origen: string = '',
    personalidad: string = ''
  ) {
    this.img = img;
    this.nombre = nombre;
    this.identidad = identidad;
    this.poderes = poderes;
    this.debilidades = debilidades;
    this.peso = peso;
    this.pesoSuper = pesoSuper;
    this.estatura = estatura;
    this.estaturaSuper = estaturaSuper;
    this.residencia = residencia;
    this.afiliacion = afiliacion;
    this.enemigos = enemigos;
    this.origen = origen;
    this.personalidad = personalidad;
  }
}
