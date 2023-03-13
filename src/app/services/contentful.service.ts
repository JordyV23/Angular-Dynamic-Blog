import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToekn,
  });

  getAllEntries() {
    this.client.getEntries().then(entries => console.log(entries));
  }
}
