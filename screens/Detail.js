import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet } from "react-native";
import { getMovie } from "../Services/service";

const placeholderImage = require("../assets/image/placeholder.png");
const height = Dimensions.get('screen').height;

const Detail = ({ route, navigation }) => {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then((movieData) => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <Image
          style={styles.image}
          source={
            movieDetail.poster_path
              ? { uri: "https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path }
              : placeholderImage
          }
        />
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large"/>}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    image: {
      height: height/2.5,
    },
  });

export default Detail;
