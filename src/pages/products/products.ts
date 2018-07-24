import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsService } from '../../services/products.service';
import { ProductsDetailPage } from '../products-detail/products-detail';

@Component({
  selector: 'page-list',
  templateUrl: 'products.html'
})
export class ProductsPage {
  products: Array<{name: string, price: Number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productsService: ProductsService) {
    this.products = this.productsService.getAll();
  }
  
  viewDetail(id){
    this.navCtrl.push(ProductsDetailPage, {product: this.productsService.getItem(id)});
  }
}
