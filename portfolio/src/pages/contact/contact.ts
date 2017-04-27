import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	
	text: string;
    todo ={
    mail:'',
    nom:'',
    message:'',
    contact:''
    }; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}
  
logForm(form) {
this.http.get('http://blondeau.chalon.codeur.online/julieb-portfolio/API/api.php?sujet='+ form.value.nom + '&mail=' + form.value.mail + '&message=' + form.value.message + '&contact=true').map(res => res.json()).subscribe(data => {
        this.text=data;});
    }
}