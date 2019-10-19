import React from 'react';
import { View, StyleSheet, Image, FlatList} from 'react-native';


class AccountScreen extends React.Component{



        uri = this.props.navigation.state.params.uri
        


    render(){
        
        const uri = this.uri;

        return(
        <View>
        { uri ? <Image source={{uri}} style={{width:300, height:300}}/> : null }
        </View>
        )
    }
}
const styles = StyleSheet.create({});
export default AccountScreen;