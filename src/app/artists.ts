export interface Artists {
  id: string;
  name: string;
  src: string;
  bio: string;
  greatestHits: string;
}

export interface ArtistsDTO {
  data: Artists[];
}
