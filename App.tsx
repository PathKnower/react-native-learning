import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { AppStyles } from "./app/styles/app";

export default function App() {
  return (
    <View style={AppStyles.container}>
      <Image 
        source={{uri: "./assets/logo.png"}} 
        style={AppStyles.image} />

      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}