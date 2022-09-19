import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getMovie } from "../Services/service";

const placeholderImage = require("../assets/image/placeholder.png");
const height = Dimensions.get("screen").height;

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
                ? {
                    uri:
                      "https://image.tmdb.org/t/p/w500/" +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
                <View style={styles.genreContainer}>
                    {movieDetail.genres.map(genre =>{
                        return (
                            <Text style={styles.genre} key={genre.id}>{genre.name}</Text>
                        )
                    })}
                </View>
            )}
            <Text>{movieDetail.vote_average}</Text>
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold'
  }
});

export default Detail;
