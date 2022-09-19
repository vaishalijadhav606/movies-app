import React, { useEffect, useState } from "react";
import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import {
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getRomanticMovies,
  getUpcomingMovies,
} from "../Services/service";
import { SliderBox } from "react-native-image-slider-box";
import List from "../component/List";

const dimensions = Dimensions.get("screen");

const Home = () => {
  const [movieImages, setMovieImages] = useState("");
  const [popularMovie, setPopularMovie] = useState("");
  const [popularTv, setPopularTv] = useState("");
  const [familyMovies, setFamilyMovies] = useState("");
  const [romanticMovies, setRomanticMovies] = useState("");
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
        setPopularMovie(movies);
      })
      .catch((err) => {
        setError(err);
      });

    getPopularTv()
      .then((movies) => {
        setPopularTv(movies);
      })
      .catch((err) => {
        setError(err);
      });

    getFamilyMovies()
      .then((movies) => {
        setFamilyMovies(movies);
      })
      .catch((err) => {
        setError(err);
      });

    getRomanticMovies()
      .then((movies) => {
        setRomanticMovies(movies);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={movieImages}
            autoplay={true}
            circleLoop={true}
            dotStyle={styles.sliderStyle}
            sliderBoxHeight={dimensions.height / 1.5}
          />
        </View>
        <View style={styles.carousel}>
          <List title="Popular Movies" content={popularMovie} />
        </View>
        <View style={styles.carousel}>
          <List title="Popular TV Shows" content={popularTv} />
        </View>
        <View style={styles.carousel}>
          <List title="Family Movies" content={familyMovies} />
        </View>
        <View style={styles.carousel}>
          <List title="Romantic Movies" content={romanticMovies} />
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
