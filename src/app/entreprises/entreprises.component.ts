import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ApiService } from 'app/services/api.service';
// import { environment } from 'environments/environment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Employee, Product, TableRows, TopSelling,api } from './table-data';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {
  listeEntreprises: any;
  topSelling:Product[];

  trow:TableRows[];
  searchText: any;
  formValue!: FormGroup
  showadd!: boolean;
  showupdate!: boolean;

  constructor(private http: HttpClient, /* private api: ApiService */private formBuilder: FormBuilder,
  private dialog: MatDialog) {

    this.topSelling=TopSelling;

    this.trow=Employee;
    this.getEntreprises();
  }

  ngOnInit(): void {
      this.formValue=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      city:['',Validators.required],
    })

    // *****************
    /* this.api.getEntreprises().subscribe(res=>{
      this.listeEntreprises=res;
    }) */
  }

  getEntreprises(){
    this.readAPI(api.endPoint+api.bonAchat_php+'Action=BONACHAT_ENTREPRISE_LISTE&Token='+api.tokenUser)
    .subscribe((Listes) =>{
      // console.log(Listes);
      this.listeEntreprises=Listes ;
      console.log(this.listeEntreprises);
    });
  }
  readAPI(url: string){
    console.log(url);
    return this.http.get(url);
  }
  add(){
    this.showadd= true;
    this.showupdate= false;
  }
  addstudent(){

  }
  update(){

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    });
  }
}
