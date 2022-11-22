import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
   /*  this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      if (user) {
        Swal.fire('Login Success!', '', 'success');
        this.loginForm.reset();
        this.route.navigate(['dashboard']);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User not found!!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    },err=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }) */
    if (this.loginForm.value.email !== '' && this.loginForm.value.password !== '') {
      let body = {
        Login: this.loginForm.value.email,
        Password: this.loginForm.value.password,
        aksi: 'Login'
      };

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );

      //const requestOptions = new opt ({ Headers: headers });

      let apiUrl=environment.endPoint+'auth.php?Login='+this.loginForm.value.email+'&Password='+this.loginForm.value.password+'&IdPoste=2&NomPoste=Caisse_2';
      console.log(apiUrl);
      this.http.get<any>(apiUrl).subscribe(async data => {
       console.log(data["Extra"]);
       console.log(data);
       if (data["OK"] !== '0') {
         environment.tokenUser=data["Extra"] ;
         this.route.navigate(['/dashboard']);
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        })
       }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username or password invalid!!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
       }
     });

    } else {
      Swal.fire(
        'Vérifier votre connexion svp.',
        'That thing is still around?',
        'question'
      )
    }
  }
}
