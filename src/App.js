import React from "react";
import "./styles.css";
import { useState } from "react";

const movieList = {
  Thriller: [
    { name: "Get Out", imdb: "7.7/10", director: "Jordan Peele" },
    { name: "Shutter Island", imdb: "8.2/10", director: "Martin Scorsese" }
  ],

  Romance: [
    {
      name: "500 Days of Summer",
      imdb: "7.7/10",
      director: "Marc Webb"
    },
    {
      name: "The Perks of being a Wallflower",
      imdb: "8/10",
      director: "Stephen Chbosky"
    }
  ],
  Drama: [
    {
      name: "The Wolf of Wallstreet",
      imdb: "8.2/10",
      director: "Martin Scorsese"
    },
    {
      name: "The Social Network",
      imdb: "7.8/10",
      director: "David Fincher"
    }
  ],
  ScienceFiction: [
    {
      name: "2001:A Space Odyssey",
      imdb: "8.3/10",
      director: "Stanley kubrick"
    },
    {
      name: "Interstellar",
      imdb: "8.6/10",
      director: "Christopher Nolan"
    }
  ],
  Crime: [
    {
      name: "The Good ,the bad and the Ugly",
      imdb: "8.8/10",
      director: "Sergio Leone"
    },
    {
      name: "GoodFellas",
      imdb: "8.7/10",
      director: "Martin Scorsese`"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Thriller");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Welcome to the Movie Recommendor App </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Select your favourite category of fims and get recommendations
      </p>

      <div>
        {Object.keys(movieList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieList[selectedGenre].map((movieList) => (
            <li
              key={movieList.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div class="movien" style={{ fontSize: "larger" }}>
                {" "}
                {movieList.name}{" "}
              </div>
              <div class="movien" style={{ fontSize: "smaller" }}>
                {" "}
                {movieList.imdb}{" "}
              </div>
              <div class="movien" style={{ fontSize: "smaller" }}>
                {" "}
                {movieList.director}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
