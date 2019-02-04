//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux'
// create a component
class ColorListener extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{height:200,width:200,backgroundColor:this.props.color}}></View>
            </View>
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

const mapStateToProps =(state) =>{
    return{
        color: state.color
    }
}


//make this component available to the app
export default connect(mapStateToProps)(ColorListener);
