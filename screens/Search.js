import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../component/Card";
import Error from "../component/Error";
import { searchMovieTv } from "../Services/service";
import Colors from "../theme/Colors";

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState();
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const onSubmit = (query) => {
    Promise.all([searchMovieTv(query, "movie"), searchMovieTv(query, "tv")])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder={"Search movie or TV show"}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}
          >
            <Icon name={"search-outline"} size={30} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchItems}>
          {/* Searched items results */}
          {searchResults && searchResults.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResults}
              renderItem={({ item }) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={(item) => item.id}
            />
          )}

          {/* When searched but no results */}
          {searchResults && searchResults.length === 0 && (
            <View style={[styles.empty, { paddingTop: 20 }]}>
              <Text>No result matching your criteria.</Text>
              <Text>Try different keywords.</Text>
            </View>
          )}

          {/* When nothing is searched */}
          {!searchResults && (
            <View style={styles.empty}>
              <Text>Type something to start searching</Text>
            </View>
          )}

          {/* Error */}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  form: {
    flexBasis: "auto",
    flexGrow: 1,
    paddingRight: 8,
  },
  searchItems: {
    padding: 5,
  },
  empty: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Search;
