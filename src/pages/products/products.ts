import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'page-list',
  templateUrl: 'products.html'
})
export class ProductsPage {
  products: Array<{name: string, price: Number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productsService: ProductsService) {
    this.products = productsService.getAll();
  }  
}
