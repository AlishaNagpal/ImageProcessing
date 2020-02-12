import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.props.navigation.navigate('Apply Filter', {
        imageUrl: Platform.OS === 'ios' ? "file:///" + image.path : image.path
      })
    });
  }

  render() {
    return (
      <View style={styles.main} >
        <TouchableOpacity activeOpacity={1} onPress={this.selectImage} >
          <Text style={styles.textStyle}> Select an Image to filter! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


