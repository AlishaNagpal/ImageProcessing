import React, { Component } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, NativeModules } from 'react-native';
import styles from "./styles";
console.disableYellowBox = true
const {ImageFilter} = NativeModules

export default class ApplyFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: this.props.route.params.imageUrl,
            changedURL: '',
            changeImage: false
        };
    }

    imageFillter = async (num) => {
        let result = await new Promise((resolve, reject) => {
            NativeModules.RNImageFilter.getSourceImage({
                imageSource: this.state.imageUrl,
                dataType: "Path",
                filterType: num
            }, (source) => {
                resolve(source.base64)
            });
        })
        return (result)
    }

    applyFilter = async (num) => {
        this.setState({
            changedURL: ''
        })
        if (num === 9) {
            this.setState({
                changedURL: this.state.imageUrl,
                changeImage: true
            })
        } else {
            let data = await this.imageFillter(num);
            this.setState({
                changedURL: data,
                changeImage: true
            })
        }
    }

    renderData = (rowDATA) => {
        const { item } = rowDATA
        return (
            <View style={styles.flatlistView} >
                <TouchableOpacity activeOpacity={1} onPress={() => this.applyFilter(item.case)} >
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    toast=()=>{
        Platform.OS === 'ios' 
        ? null
        : ImageFilter.show('Awesome');
      }

    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={this.toast}>
                    <Text>Show</Text>
                </TouchableOpacity>
                <Image
                    source={{ uri: this.state.changeImage ? this.state.changedURL : this.state.imageUrl }}
                    style={styles.imageStyle}
                />
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => (item + index).toString()}
                    renderItem={this.renderData}
                    horizontal
                />
            </View>
        );
    }
}

const DATA = [
    { name: 'Original', case: 9 },
    { name: 'Sepia', case: 0 },
    { name: 'Chrome', case: 1 },
    { name: 'Fade', case: 2 },
    { name: 'Vintage', case: 3 },
    { name: 'Mono', case: 4 },
    { name: 'Noir', case: 5 },
    { name: 'Cool', case: 6 },
    { name: 'Tonal', case: 7 },
    { name: 'Warm', case: 8 },
]
