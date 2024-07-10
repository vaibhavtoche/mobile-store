import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private ps: ProductService,
              private router: Router,
              private route: ActivatedRoute
  ){}
  updateForm!: FormGroup;
  id!: number;
  products$!: Observable<Product>
  ngOnInit(): void {
      this.route.params.subscribe(params => this.id=params['id']);
      this.products$=this.ps.readOne(this.id)
      this.updateForm=this.fb.group({
        name:   ['',[
                        Validators.required,
                        Validators.minLength(5)]],
        price:  ['',[
                        Validators.required,
                        Validators.min(1),
                        Validators.max(500000)]],
        description:[''],
        imageUrl:['']                
      })
  }
    get f(){
      return this.updateForm.controls;
    }
    updateProduct(){
      this.ps.update(this.id,this.updateForm.value).subscribe(
        data => this.router.navigate(['/products']));
    }
}
