import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Configuration, DataResult, LoginDataResult } from '../Storage/Helper';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient,private configuration:Configuration) { }

  public RequestGet(url:string,data?:any){
    const queryParams = data ? new HttpParams({ fromObject: data }) : undefined;
    return this.http.get<DataResult>(this.configuration.Base_URL+url, {params: queryParams,headers:this.RequestHeader() });
  } 

  public RequestPost(url:string,data:any){
    return this.http.post<DataResult>(this.configuration.Base_URL+url, data);
  }

  public RequestHeader():HttpHeaders | { [header: string]: string | string[]; }{
    var header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
    });
    return header;
  }
}
