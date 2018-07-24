import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { ProductsAddPage } from '../pages/products-add/products-add';
import { ProductsDetailPage } from '../pages/products-detail/products-detail';

//Services
import { ProductsService } from '../services/products.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductsAddPage,
    ProductsDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductsAddPage,
    ProductsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsService
  ]
})
export class AppModule {}
