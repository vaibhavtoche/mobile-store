import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy{
  age=0
  name='No name'
  //Subscription$ !: Subscription;
  myObservable$ !:Observable<any>
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void{
    this.myObservable$ = this.route.queryParams
    //this.Subscription$=this.route.queryParams.subscribe(params=>{
      //                      this.name=params['name']
        //                    this.age=params['age']
   // })
  }
  ngOnDestroy(): void{
    //this.Subscription$.unsubscribe();
  }
}
