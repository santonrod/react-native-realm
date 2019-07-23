import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <React.Fragment>
          <View style={ {flex: .3, flexDirection: 'column', alignItems: 'flex-end'} }>
            <Image source={pic} style={{width: 193, height: 70}}/>
          </View>
          <View style={ {flex: .3, flexDirection: 'column'} }>
            <Image source={pic} style={{width: 193, height: 70}}/>
          </View>
          <View style={ {flex: .3, flexDirection: 'column'} }>
            <Image source={pic} style={{width: 193, height: 70}}/>
          </View>
      </React.Fragment>
    );
  }
}