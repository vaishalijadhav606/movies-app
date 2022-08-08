import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/adaptive-icon.png")}
      />

      <TouchableOpacity style={styles.googleBtn}>
        <Text style={styles.loginText}>Log In With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <Text style={styles.loginText}>Log In With Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 100,
    height: 100,
  },

  loginBtn: {
    minWidth: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },

  googleBtn: {
    minWidth: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgb(185, 191, 200)',
    color:'rgb(80, 89, 101)'
  },

  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
