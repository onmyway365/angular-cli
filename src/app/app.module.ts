import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { SalesDataService } from "app/sales-data.service";
import { SalesData3Service } from './sales-data3.service';
import { InitCapsPipe } from './shared/init-caps.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    SearchBoxDirective,
    InitCapsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [SalesDataService, SalesData3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
