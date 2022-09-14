import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getPopularMovies } from "../Services/service";

const Home = () => {
  const [movie, setMovie] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        setMovie(movies[0]);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <View>
      <Text>Movie name: {movie.original_title}</Text>
      <Text>Movie language: {movie.original_language}</Text>
      <Text>Release date: {movie.release_date}</Text>
      {error && <Text style={{ color: "red" }}>Error in the server</Text>}
    </View>
  );
};

export default Home;
