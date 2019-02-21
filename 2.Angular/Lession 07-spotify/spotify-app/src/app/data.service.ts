import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { API_TOKEN } from './tokenInterceptorService';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  SEARCH_API = 'https://api.spotify.com/v1/search';

  constructor(private http: HttpClient) {}

  getArtist(artist: string) {
    return this.http.get(this.SEARCH_API, {
      params: {
        q: artist,
        type: 'artist'
      }
    });
  }

  getTopTracks(id: string) {
    return this.http.get(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?country=VN`
    );
  }
}
