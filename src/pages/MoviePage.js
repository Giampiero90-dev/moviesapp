import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { imdb_id } = useParams();

  const [movieData, set_movieData] = useState();

  console.log(movieData);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://omdbapi.com/?apikey=f017e376&i=${imdb_id}`
      ).then((r) => r.json());

      set_movieData(data);
    }
    fetchData();
  }, [imdb_id]);

  return (
    <div>
      {movieData ? (
        <div>
          <h2>{movieData.Title}</h2>
          <p>{movieData.Year}</p>
          <img
            src={movieData.Poster}
            alt={movieData.Title}
            style={{
              display: "block",
              maxWidth: "100%",
            }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
