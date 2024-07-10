import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products!: Product[];
 // constructor(private ps: ProductService){
   // console.log('product-list component');
    //this.ps.someMethod();
    //console.log(this.ps.message);
 // }
 
 constructor(private ps: ProductService) { }
 addToCart(){
   this.ps.updateCartCount();
 }
 copyOfProducts!: Product[];
  errorMessage!: string;

  private _searchText =''
  get searchText():string{
    return this._searchText;
  }

  set searchText(value: string){
    this._searchText = value,
    this.filterProducts(this._searchText)

  }
  filterProducts(filterValue: string){
    this.copyOfProducts = this.products.filter(p=> p.name.toLowerCase().includes(filterValue.toLowerCase()))
  }

  ngOnInit(): void {
    this.ps.readAll().subscribe({
      next: data => {
        this.products = data,
        this.copyOfProducts = this.products;
      },
      error: err => this.errorMessage = err

      
    })
  }}
