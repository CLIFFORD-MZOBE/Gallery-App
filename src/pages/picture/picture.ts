import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {
  images=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getimg();
  }
  getimg(){
    firebase.database().ref('/fireuploads/').on("value", (snapshot) =>{
      snapshot.forEach((snap)=>{
        console.log(snap.val().downloadUrl);
        
        if(snap.val().downloadUrl.indexOf('.jpg') >= 0){
          this.images.push({downLoadUrl:snap.val().downloadUrl});
        }
        return false;
      });
    }
    ); 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PicturePage');
  }

}
