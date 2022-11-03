import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, listAll } from '@angular/fire/storage';
import { AuthService } from '../authService/auth.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private auth : AuthService, private storage : Storage) { }

  file : any;
  files : string[] = [];
  ngOnInit(): void {
    this.getFiles();
  }

  logout(){
    this.auth.logout()
  }

  uploadFiles(event : any){
    this.file = event.target.files[0];
  }

  addFile(){
    const fileRef = ref(this.storage, `files/${this.file.name}`);
    uploadBytes(fileRef, this.file).then(x => {
      console.log(x);
    }).catch(err => {
      console.log(err);
    });
  }

  getFiles(){
    const filesRef = ref(this.storage, 'files');
    listAll(filesRef).then(async files => {
      for(let file_one of files.items){
        const url = await getDownloadURL(file_one);
        console.log(url);
      }
    }).catch(err => { 
      console.log(err);
    });
  }

}
