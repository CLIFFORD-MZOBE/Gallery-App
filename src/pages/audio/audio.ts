import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage {
  audios=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getaud();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioPage');
  }
  getaud(){
    firebase.database().ref('/fireuploads/').on("value", (snapshot)=>{ 
      snapshot.forEach((snap)=>{
      //this.cuisine._key = snap.key;
        //this.cuisine.name = snap.val();
        //console.log(snap.val().name + ' key ' + snap.key)
        //Appending to items list
        let tokens= snap.val().downloadUrl.split('%',2);
        let fileName = tokens[1].split('?',1);
        let fileType = fileName[0].split('.');
        console.log(fileType[1]);
        //console.log(snap.val().downloadUrl.split('%',1));
        if(fileType[1] == 'mp3' || fileType[1] == 'm4a'){
          this.audios.push({downloadURL:snap.val().downloadUrl});
          //console.log('downloading video');
          //this.videosURL.push({downloadURL:snap.val().downloadUrl});
          //console.log('Done downloading video');
          //console.log(this.videosURL[0]);
          console.log(this.audios[0]);
          console.log(this.audios[0].downloadURL);
        }
        
        //this.cuisine.name = snap.val().name;
        //this.cuisine._key = snap.key;
        //this.items.push(this.cuisine);
        return false;
      })
    
    }); 
  }
}
