import React from 'react';
import { StyleSheet, ImageBackground, View} from 'react-native'
import { Text, Input, Button, colors} from 'react-native-elements';
import Spacer from '../components/Spacer';


const LandingScreen = ({navigation})=>{
return (
    <ImageBackground source={require('../images/backgroundlanding.jpg')} style={styles.container}>
        <View style={{paddingTop:350}}>

            <Spacer>

        <Button 
            raised 
            large  
            title="Log in"
            titleStyle={{ textShadowColor:'#585858',
                          textShadowOffset:{width: 2, height: 2},
                          textShadowRadius:5}} 
            buttonStyle={{ height: 50, width: 230, backgroundColor: '#FEC8D8' , borderRadius: 5 }} 
            onPress={ ()=> navigation.navigate('Login')} 
        />

            </Spacer>


            <Spacer>
      <Button 
            raised 
            large  
            title="Creact an account" 
            titleStyle={{ textShadowColor:'#585858',
                          textShadowOffset:{width: 2, height: 2},
                          textShadowRadius:5}}
            buttonStyle={{ height: 50, width: 230, backgroundColor: '#A2A2D0' , borderRadius: 5 }}
            onPress={ ()=>{ console.log('Landed'); navigation.navigate('Signup'); }} 
        />

            </Spacer>

            <Spacer>

        <Button 
            raised   
            title="DashBoard" 
            titleStyle={{ textShadowColor:'#585858',
                          textShadowOffset:{width: 2, height: 2},
                          textShadowRadius:5}}
            buttonStyle={{ height: 50, width: 230, backgroundColor: '#95B4CC' , borderRadius: 5 }}
            onPress={ ()=>{ console.log('Dash'); navigation.navigate('DashBoard'); }} 
        />


</Spacer>

        </View>


    </ImageBackground>


);


};

LandingScreen.navigationOptions = ()=>{
    return {
        header: null
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }


});
export default LandingScreen;