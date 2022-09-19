import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class PlayButton extends React.PureComponent {
  render() {
    return (
      <Pressable style={styles.button}>
        <Icon name={"caret-forward-outline"} size={30} color={'#FFFFFF'}/>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        padding: 10,
        backgroundColor: '#4481FC',
        alignContent: 'center',
        borderRadius: 50
    }
})

export default PlayButton;