import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ListingsService } from "./listings.service";

@Injectable({providedIn: 'root'})
export class AbcPhotosService {

  constructor(private http: HttpClient, private listingsService: ListingsService) {}

  photoList: string[] = [];

  getPhotosByDirectory(directoryName: string): Observable<string[]> {
    let photoUrl = `${this.listingsService.baseUrl}photoService?directoryName=${directoryName}`;
    return this.http.get(photoUrl).pipe(map(data => {
      this.photoList = <string[]> data;
      return this.photoList;
    }));
  }
}
