import { Component, OnInit } from '@angular/core';
import { di } from '../classes/dishclass';
import { DishService } from '../services/dish.service';
import { cu } from '../classes/cusclass';
import { bil } from '../classes/bilclass';
// import { tmpdir } from 'os';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  arr:di[]=[];
  cusarr:cu[]=[];
  dishadd:di[]=[];
  // bil:bil[]=[];
  // qty:number=1;
  tamt:number=0;
  // price:number;
  Item:di[]=[];
  Price:number[]=[];
  qty:number[]=[];
  Qtydrop:number[]=[];


  constructor(private dish:DishService) { }

  ngOnInit() {
    this.dish.getAll().subscribe(
      (data:di[])=>{
        console.log(data);
        this.arr=data;
      }
    );
    this.dish.cusget().subscribe(
      (data:cu[])=>{
        console.log(data);
        this.cusarr=data;
      }
    );
    for (let i = 1; i < 100; i++) {
      this.Qtydrop.push(i);
    }

  }
  onchange(item,i){

    this.tamt=this.qty[i]*item.d_price;
    this.Item[i]=item;
    this.Price[i]=item.d_price;
    this.qty[i]=item.i;
// console.log(this.qty[i]);
    // this.Qtydrop.push(this.Qty[i]);
    // this.Item.push(item);
    // this.Price.push(item.price*this.Qty[i]);
    // // this.tamt=Item.

  }
  onAdd(item:di){

    if (this.dishadd.find(x=>x.d_id==item.d_id)) {
      alert('Already exsist');
    } else {
      this.dishadd.push(item);
      this.Price.push(item.d_price);
      this.tamt+=item.d_price;
    }
    // alert(item.d_price);
    // this.price=item.d_price*this.qty;
    // alert(this.price);
    // alert(this.price);
    // this.bil.push(new bil(item.d_name,item.d_price,this.qty));
    // for(let i=0;i<bil.length;i++){
    //   this.tamt+=this.bil[i].d_price;
    // }
    // alert(this.tamt);

    // this.tamt+=item.d_price*this.qty;
    // this.tamt=item.d_price;
    // alert(this.tamt);

    // this.dishadd.push(new di(item.d_id,item.d_name,item.d_price,item.d_img));
    // this.dishadd[0].d_id=item.d_id;
    // this.dishadd[0].d_name=item.d_name;
    // this.dishadd[0].d_price=item.d_price;
  }
onshowitem(id:string){
  this.dish.menuItem(id).subscribe(
    (data:any)=>{
      console.log(data);
      this.arr=data;
    }
  );
}
}
