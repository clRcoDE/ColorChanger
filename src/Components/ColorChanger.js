//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableHighlight} from 'react-native';
import {setBlue , setRed , setGreen , setYellow} from '../Services/actions'

import  {connect}  from 'react-redux'
// create a component
class ColorChanger extends Component {

colorDispatcher=(c)=>{
if(c==='BLUE'){


    this.props.dispatch(setBlue())
}else if(c==='RED'){
    this.props.dispatch(setRed())


}else if(c==='GREEN'){
    this.props.dispatch(setGreen())


}else if(c==='YELLOW'){
    this.props.dispatch(setYellow())


}
}

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'BLUE')}><Text>BLUE</Text></TouchableHighlight>
                <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'RED')}><Text>RED</Text></TouchableHighlight>
                <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'YELLOW')}><Text>YELLOW</Text></TouchableHighlight>
                <TouchableHighlight onPress={this.colorDispatcher.bind(this , 'GREEN')}><Text>GREEN</Text></TouchableHighlight>
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

//make this component available to the app
const mapStateToProps =(state) =>{
    return{
        color: state.color
    }
}


//make this component available to the app
export default connect(mapStateToProps)(ColorChanger);

