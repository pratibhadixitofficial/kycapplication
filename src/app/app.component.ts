import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam'; 
import {Subject, Observable} from 'rxjs'; 
import {ImageuploadService} from './imageupload.service';
import { HttpClient,HttpParams} from '@angular/common/http';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'] 
}) 
export class AppComponent implements OnInit { 
  
  public  x:string;
  title = 'kycApplication'; 
  public img:string;
  public webcamImage: WebcamImage = null;
  
  constructor(private imageuploadService: ImageuploadService) { }

	ngOnInit() {
  }

  private trigger: Subject<void> = new Subject<void>(); 
  triggerSnapshot(): void { 
   this.trigger.next(); 
  } 

  handleImage(webcamImage: WebcamImage): void { 
    this.x = document.getElementsByClassName("imgData")[0].getAttribute("data-id");
    if(this.x == '1'){
      this.webcamImage = webcamImage; 
      this.imageuploadService.saveAddress(this.webcamImage).subscribe(
      (response)=>{
                 });
      }else{
          alert('Invalid image');
      }

  } 
   
  public get triggerObservable(): Observable<void> { 
    return this.trigger.asObservable(); 
  } 
  
}