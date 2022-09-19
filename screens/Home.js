import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getRomanticMovies,
  getUpcomingMovies,
} from "../Services/service";
import { SliderBox } from "react-native-image-slider-box";
import List from "../component/List";
import Error from "../component/Error";

const dimensions = Dimensions.get("screen");

const Home = ({navigation}) => {
  const [movieImages, setMovieImages] = useState();
  const [popularMovie, setPopularMovie] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [romanticMovies, setRomanticMovies] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getRomanticMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMovieData,
          popularTvData,
          familyMoviesData,
          romanticMoviesData,
        ]) => {
          const movieImagesArray = [];
          upcomingMoviesData.forEach((element) => {
            movieImagesArray.push(
              "https://image.tmdb.org/t/p/w500/" + element.poster_path
            );
          });
          setMovieImages(movieImagesArray);
          setPopularMovie(popularMovieData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setRomanticMovies(romanticMoviesData);
          setLoaded(true);
        }
      )
      .catch(() => {
        setError(true);
      }).finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          {movieImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={movieImages}
                autoplay={true}
                circleLoop={true}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5}
              />
            </View>
          )}
          {popularMovie && (
            <View style={styles.carousel}>
              <List navigation={navigation} title="Popular Movies" content={popularMovie} />
            </View>
          )}
          {popularTv && (
            <View style={styles.carousel}>
              <List navigation={navigation} title="Popular TV Shows" content={popularTv} />
            </View>
          )}
          {familyMovies && (
            <View style={styles.carousel}>
              <List navigation={navigation} title="Family Movies" content={familyMovies} />
            </View>
          )}
          {romanticMovies && (
            <View style={styles.carousel}>
              <List navigation={navigation} title="Romantic Movies" content={romanticMovies} />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
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
