export class Comic {
  id: string = '';
  url: string;
  img: string;
  nombre: string;
  constructor(url: string, img: string, nombre: string) {
    this.url = url;
    this.img = img;
    this.nombre = nombre;
  }
}
