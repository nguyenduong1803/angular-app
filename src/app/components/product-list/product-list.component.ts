import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import IProduct from 'src/app/types/product';
import { FilterProductComponent } from '../filter-product/filter-product.component';
import { StarComponent } from '../star/star.component';
const listProduct: IProduct[] = [
  {
    productId: 1,
    code: 'code1',
    productName: 'Leaf Jhon',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2016',
    description: 'Leaf rake with 48-inch wooden handle.',
    price: 19.95,
    starRating: 3.2,
    imageUrl:
      'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
  },
  {
    productId: 2,
    code: 'code2',
    productName: 'TV Rake',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2016',
    description: 'Leaf rake with 48-inch wooden handle.',
    price: 19.95,
    starRating: 4.2,
    imageUrl:
      'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"',
  },
  {
    productId: 3,
    code: 'code3',
    productName: 'Man Rake',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2016',
    description: 'Leaf rake with 48-inch wooden handle.',
    price: 19.95,
    starRating: 4.8,
    imageUrl:
      'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
  },
  {
    productId: 4,
    code: 'code4',
    productName: 'Banh Rake',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2016',
    description: 'Leaf rake with 48-inch wooden handle.',
    price: 19.95,
    starRating: 3.4,
    imageUrl:
      'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
  },
];
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit {
  @ViewChild(StarComponent) child: StarComponent | undefined;
  @ViewChild(FilterProductComponent) filter: FilterProductComponent | undefined;
  ngAfterViewInit() {
    console.log(this.child?.star);
  }
  list: IProduct[] = listProduct;
  getValue(key: string) {
    this.list = listProduct.filter(
      (item) =>
        item.productName
          .toString()
          .toLowerCase()
          .indexOf(key.toString().toLowerCase()) !== -1
    );
  }
  ngDoCheck() {
    this.list = listProduct.filter(
      (item) =>
        item.productName
          .toString()
          .toLowerCase()
          .indexOf(this.filter?.searchText?.toString().toLowerCase() || '') !==
        -1
    );
  }
  getStar(star: number) {
    alert(`Đánh giá của sản phẩm là ${star} sao`);
  }
}
