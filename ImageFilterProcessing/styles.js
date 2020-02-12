import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 20,
        color: 'blue'
    },
    imageStyle: {
        height: 400,
        width: 400,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 50
    },
    flatlistView:{
        margin: 40,
        alignItems: 'center',
        // marginTop:120

    },
    text:{
        color: 'darkgrey',
        fontSize:22
    }
})

export default styles;