import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: [''],
    });
  }

  signUp() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        // console.log(this.signup.value);
        this.http
          .post<any>('http://localhost:3000/signupUsers', this.signupForm.value)
          .subscribe(
            (res) => {
              Swal.fire('Signup Successfull!', '', 'success');
              this.signupForm.reset();
              this.route.navigate(['login']);
            },
            (err) => {
              // alert('Something went wrong')
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>',
              });
            }
          );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });

  }
}
