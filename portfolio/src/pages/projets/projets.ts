import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Projets page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-projets',
  templateUrl: 'projets.html',
})
export class ProjetsPage {

  posts: any;

	constructor(public http: Http) {
 
    this.http.get('http://blondeau.chalon.codeur.online/julieb-portfolio/API/api.php').map(res => res.json()).subscribe(data => {
        console.log(data);
        this.posts = data;
    });
 
  }
}
  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Projets');
  }*/