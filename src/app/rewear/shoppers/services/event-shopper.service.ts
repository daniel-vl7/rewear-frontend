import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
    providedIn: 'root'
})
export class EventShopperService {
    private baseUrl = 'https://my-json-server.typicode.com/daniel-vl7/rewearDB';

    constructor(private http: HttpClient) { }

    // Método para cargar eventos desde la URL
    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(`${this.baseUrl}/events`);
    }
}
