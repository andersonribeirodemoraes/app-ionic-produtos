import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsService } from '../../services/products.service';
import { ProductsPage } from '../products/products';

/**
 * Generated class for the ProductsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products-add',
  templateUrl: 'products-add.html',
})
export class ProductsAddPage {

  public product: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductsService) {
    this.product = {};
  }

  add() {
    this.productService.add(this.product);
    this.navCtrl.setRoot(ProductsPage);
  }

}
