import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import AddPhoto from '../containers/AddPhoto';


const AddPostScreen = ()=>{

    return(
            <AddPhoto/>
        );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorMassage:{
        fontSize: 13,
        color: 'red', 
        fontStyle:'italic',
        fontWeight: 'bold',
        marginVertical: 10
     },
    modal:{
        height: 100,
        width: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }

});
export default AddPostScreen;