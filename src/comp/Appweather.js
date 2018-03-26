import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, TextInput } from 'react-native';

export default class Appweather extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        city: '',
        forecast: {
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=b5c79879cb96faf15d5995c224cffc0f&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text1}>Weather APP</Text>
          </View>
          <View style={styles.box2}>
              <Text style={styles.text}>INPUT CITY</Text>
              <TextInput style = {{fontSize: 15, height: 40, textAlign:'center'}}

                onChangeText={(city)=>this.setState({city})}
              />

              <Button onPress={
                () => this.getWeather()
              }
              title="Search"
              color="#F57F17"
              accessibilityLabel="Click to Search"
              />
          </View>
          <View style={styles.box3}>
            <Text style = {{padding: 10, fontSize: 20}} >
              City  {"\t\t\t\t\t\t\t"}= {this.state.city} {"\n"}
              Weather   {"\t\t\t\t"}= {this.state.forecast.main} {"\n"}
              Description {"\t "}  = {this.state.forecast.description} {"\n"}
              Temperature {"\t\t"}= {this.state.forecast.temp} {" 'Celcius"}
            </Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.text1}>Powered By : </Text>

          </View>
          <View style={styles.box5}>
            <Text style={styles.text2}> api.openweathermap.org </Text>
          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFF9C4',
    flex: 1,
    flexDirection: 'column',
  },

  box1: {
    backgroundColor: '#F57F17',
    flex: 1,
    justifyContent: 'center'
  },

  box2: {
    backgroundColor: '#FBC02D',
    flex: 2,
    margin: 10,
    padding: 10,
    justifyContent: 'center'
  },

  box3: {
    backgroundColor: '#FBC02D',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box4: {
    backgroundColor: '#F57F17',
    flex: 0.5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  box5: {
    backgroundColor: '#F57F17',
    flex: 0.5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom :10
  },

  text: {
    padding: 30, fontSize: 20, color: 'black', textAlign: 'center',fontWeight: 'bold'
  },

  text1: {
    padding: 20, fontSize: 30, color: 'white', textAlign: 'center', fontWeight: 'bold'
  },
  text2: {
    padding: 20, fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'
  }

});
