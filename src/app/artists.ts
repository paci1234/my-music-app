export interface Artists {
  id: string;
  name: string;
  src: string;
  bio: string;
  audioList: any;
  greatestHits: any;
  counter: [];
}

export interface ArtistsDTO {
  data: Artists[];
}
