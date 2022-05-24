export interface Artists {
  id: string;
  name: string;
  src: string;
  bio: string;
}

export interface ArtistsDTO {
  data: Artists[];
}
