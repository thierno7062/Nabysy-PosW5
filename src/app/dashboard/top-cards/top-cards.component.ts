import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {topcard,topcards,infolength,_length, api} from './top-cards-data';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards:topcard[];

  listeEntreprises: any;
  listeBoutiques: any;
  listeTransaction: any;
  listeCartes: any;
  nbEntreprises: number=0;
  nbTransactions: number=0;
  nbBoutiques: number=0;
  nbCartes: number=0;

  constructor(private http: HttpClient,private router: Router) {

    this.topcards=topcards;

    this.getEntreprises();
    this.getTransactions();
    this.getBoutique();
    this.getCartes();
  }

  ngOnInit(): void {
  }
  getEntreprises(){
    this.readAPI(api.endPoint+api.bonAchat_php+'Action=BONACHAT_ENTREPRISE_LISTE&Token='+api.tokenUser)
    .subscribe((Listes) =>{
      // console.log(Listes);
      this.listeEntreprises=Listes ;
      console.log(this.listeEntreprises);
      this.nbEntreprises=this.listeEntreprises.length;
      console.log(this.nbEntreprises);

    });
  }
  getTransactions(){
    this.readAPI(api.endPoint+api.bonAchat_php+'Action=BONACHAT_GETHIST_TRANSACTION&DATEDEBUT=2022-01-01&DATEFIN=2022-12-31&ORDRE=ID ASC&Token='+api.tokenUser)
    .subscribe((Listes) =>{
      // console.log(Listes);
      this.listeTransaction=Listes ;
      console.log(this.listeTransaction);
      this.nbTransactions=this.listeTransaction.length;
      console.log(this.nbTransactions);

    });
  }

  getBoutique(){
    this.readAPI(api.endPoint+api.boutique_php+'Action=LISTE_BOUTIQUE')
    .subscribe((Listes) =>{
      // console.log(Listes);
      this.listeBoutiques=Listes ;
      console.log(this.listeBoutiques);
      this.nbBoutiques=this.listeBoutiques.length;
      console.log(this.nbBoutiques);

    });
  }
  readAPI(url: string){
    console.log(url);
    return this.http.get(url);


  }
  entr(){
    this.router.navigate(['/enterprises'])
  }
  getCartes(){
    this.readAPI(api.endPoint+api.bonAchat_php+'Action=BONACHAT_CARTE_LISTE&Token='+api.tokenUser)
    .subscribe((Listes) =>{
      // console.log(Listes);
      this.listeCartes=Listes ;
      console.log(this.listeCartes);
      this.nbCartes=this.listeCartes.length;
      console.log(this.nbCartes);

    });
  }
}
