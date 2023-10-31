export class Products {
  id: number;
  name: string;
  description: string;
  state: string;
  color: string;
  price: number;
  urlToImg: string;
  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.state = '';
    this.color = '';
    this.price = 0;
    this.urlToImg = '';
  }
}
