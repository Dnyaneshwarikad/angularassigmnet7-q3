import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{ 
     public Data ="Marvellous Infosystems";

     public MyAction()
     {
         this.Data="Educating for better tomorrow";
     }

}
