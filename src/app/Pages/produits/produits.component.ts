import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClientModule } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
   ListProduits: produit[];
   public Produit: produit;
   public formData: produit;
   
  constructor(public produitservice: ProduitsService, private http: HttpClientModule) { }

  ngOnInit(): void {
    // this.resetForm();
      let ListProduits = this.produitservice.getProduitList();
      ListProduits.subscribe((data) => this.ListProduits=(data));  
     // console.log(ListProduits); 
     
    
  }
    
     loggerform(formProd: NgForm){
        console.log(formProd);   
     }

  

    /* refreshProduitList(){
       this.produitservice.getProduitList().subscribe((data) => this.ListProd=data)
      

    } */
           

  /* onSubmit(form: NgForm){
  //    this.insererProd(form)
  
  } */
   /* insererProd(form: NgForm){
     
     this.produitservice.postProd(form.value).subscribe(res => {
       this.produitservice.toastr.success('Produit ajouté avec succès','Enregistrement produit');
       this.resetForm(form);
     }


  }   */
  

}
