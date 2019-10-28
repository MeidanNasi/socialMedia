import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Api from '../api/index';

const FollowScreen = ()=>{
return (

    <View style={styles.container}>

        <Button 
            title= 'Add follower'
            onPress={ async ()=>{ 

                console.log("test:")
                try{
                    const response = await Api.post('/follower/add-follower',
                    { 
                        f_user_id: 1
                    }
                    );
                    console.log("response:"+JSON.stringify(response));               
                } catch(err){
                    console.log(JSON.stringify(err));
                }

             }}
        />



    </View>

    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
        paddingTop: 100,
    }
});
export default FollowScreen;