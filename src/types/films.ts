interface FilmData {
  id: number;
  genres_ids: number[];
  backdrop_path: string;
  adult: false;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: number;
}

export default FilmData;
