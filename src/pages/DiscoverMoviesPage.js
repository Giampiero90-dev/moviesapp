import { useState } from "react";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, set_movies] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);

    const queryParam = encodeURIComponent(searchText);

    const data = await fetch(
      `https://omdbapi.com/?apikey=f017e376&s=${queryParam}`
    ).then((r) => r.json());

    console.log(data.Search);

    set_movies(data.Search);
  };

  console.log("this is movie", movies);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {movies.map((movie) => {
          return (
            <div style={{ backgroundColor: "green" }}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
