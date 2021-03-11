import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {

	url='/xtragyan/uploadImage.php';
  constructor(private httpClient:HttpClient) { }

  saveAddress(data:any){
      let param1 = new HttpParams().set('action','addAddress');
      return this.httpClient.post<any>(this.url,{params:data});
    }

}
