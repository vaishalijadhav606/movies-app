import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

const placeholderImage = require("../assets/image/placeholder.png");

class Card extends React.PureComponent {
  render() {
    const { item, navigation } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', {
        movieId: item.id
      })}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? { uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path }
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.moviesName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    marginBottom: 10
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
  moviesName: {
    position: "absolute",
    width: 100,
    top: 10,
    textAlign: "center",
  },
});

export default Card;
