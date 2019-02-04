import {RED , BLUE , GREEN , YELLOW}  from './type'


initialState = {
    color: 'black'
}


 function  reducer ( state =  initialState , action ) {
switch(action.type){
    case RED: 
    return{
        color:'red'
    };
    case BLUE:
    return{
        color:'blue'
    };
    case GREEN:
    return{
        color:'green'
    };
    case YELLOW:
    return{
        color:'yellow'
    };
    default :
    return state;
}
}

export default reducer;