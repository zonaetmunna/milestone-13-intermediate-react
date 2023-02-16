import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Doctors from './Components/doctors/Doctors';
import Home from './Components/Home/Home';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Text>hi react native</Text>
        <StatusBar style="auto" />
        <Link to="/home"><Text>Home</Text></Link>
        <Link to="/doctors"><Text>Doctors</Text></Link>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
