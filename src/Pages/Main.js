//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorListener from '../Components/ColorListener';
import ColorChanger from '../Components/ColorChanger' 
import reducer from '../Services/reducer'
import {createStore} from 'redux'
// create a component
import {Provider} from 'react-redux'

const store = createStore(reducer)
class Main extends Component {
    render() {
        return (
            <Provider style={styles.container}  store={store}>
                <ColorListener/>
                <ColorChanger/>
               
            </Provider>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Main;
