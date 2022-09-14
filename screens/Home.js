import React, { useEffect, useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { getPopularMovies, getUpcomingMovies } from "../Services/service";
import { SliderBox } from "react-native-image-slider-box";

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [movieImages, setMovieImages] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
        const movieImagesArray = [];
        movies.forEach((element) => {
          movieImagesArray.push(
            "https://image.tmdb.org/t/p/w500/" + element.poster_path
          );
        });
        setMovieImages(movieImagesArray);
      })
      .catch((err) => {
        setError(err);
      });

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
      <SliderBox
        images={movieImages}
        autoplay={true}
        circleloop={true}
        dotStyle={styles.sliderStyle}
        sliderBoxHeight={dimensions.height / 1.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    sliderStyle: {
        height: 0
    }
})

export default Home;
