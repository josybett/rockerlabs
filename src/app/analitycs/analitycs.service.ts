import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnalitycsService {

  constructor(private http: HttpClient) {  }

	private handleError(error: any): Promise<any> {
		console.log('Error al leeer la data', error);
		return Promise.reject(error.message || error);
  }
  
	private extractData(res: any) {
		let body = res;
		return body;
	}

  getData() {
    return this.http.get<any>('../assets/data/activity-data.json')
      .toPromise()
      .then(resp => this.extractData(resp))
      .catch(this.handleError);
  }

}