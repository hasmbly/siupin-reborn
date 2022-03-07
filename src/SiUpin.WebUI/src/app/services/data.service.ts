import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Berita } from 'src/models/berita';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DataService
{
    private REST_API_SERVER = environment.apiURL;

    constructor(private httpClient: HttpClient) { }

    public getBeritas()
    {
        return this.httpClient.get<Berita[]>(this.REST_API_SERVER + "/berita");
    }
}