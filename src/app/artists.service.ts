import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Artists, ArtistsDTO} from './artists';

@Injectable()
// The Injectable function is needed because we have a Service
export class ArtistsService {
  constructor(private httpClient: HttpClient) {
  }

  getArtists(): Observable<Artists[]> {
    return this.httpClient
      .get<ArtistsDTO>('./assets/artists.json')
      .pipe(map((u) => u.data));
  }
}
