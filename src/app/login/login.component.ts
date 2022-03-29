import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   public abhi:any;

//   public m:number=1;

//   public message:string='';

//   constructor( private service:LoginService,private router:Router) {
//    }

//   ngOnInit(): void {
//     this.getLoginData();
//   }

//    private getLoginData():void{
//      this.service.getLogin().subscribe((result: any)=>
//       {
//         this.abhi=result;
//       });
//    }
      
  form=new FormGroup(
    {

      userid:new FormControl('', [Validators.required]),
      pass:new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),

    }
  );
  get f(){  
    return this.form.controls;
  }

//   onSubmit() {​​​​​​​​​ 
//     console.log(this.form.value); 
//     for(let a of this.abhi){
//     if((this.form.value.userid==a.userid) && (this.form.value.pass==a.password))
//     {
//       this.message=this.form.value.userid;
//       this.m=2;
//       break;
//     }

//     }​​​​​​​​
//     if(this.m==2){
//       alert("login sucessful");
//       this.router.navigate(['/dashboard']); 
//       alert("Welcome"+' '+ this.message);
//     }
//     else{
//       alert("invalid login details")
//     }
   
//   }

 }
