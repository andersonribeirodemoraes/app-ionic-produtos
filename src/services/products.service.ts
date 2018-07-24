import {Injectable} from "@angular/core";
import { PRODUCTS } from "../mocks/mock-products";


@Injectable()
export class ProductsService {
  private products: any;

  constructor() {
    this.products = PRODUCTS;
  }

  getAll() {
    return this.products;
  }

  getItem(id) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id === parseInt(id)) {
        return this.products[i];
      }
    }
    return null;
  }

  remove(item) {
    this.products.splice(this.products.indexOf(item), 1);
  }

  add(item){
    this.products.push(item);
  }
}
