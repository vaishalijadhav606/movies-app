import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from 'prop-types';
import Colors from "../theme/Colors";

const propTypes = {
  main: PropTypes.bool,
};

const defaultProps = {
  main: false,
};

class Navbar extends React.PureComponent {
  render() {
    const { navigation, main } = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Text style={styles.logo}>M</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <Icon name={"search-outline"} size={30} color={Colors.black} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{paddingTop: 30}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name={"chevron-back"} size={40} color={Colors.lightGray} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainNav: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.primary,
  },
});

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
