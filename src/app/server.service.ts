import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    console.log("ssasa");
    return this.http.post('https://ng-http-71c0d.firebaseio.com/data.json', servers);
  }
}
