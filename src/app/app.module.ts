import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { TableComponent } from './components/table/table.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TableComponent,
    ProductListComponent,
    FilterProductComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
