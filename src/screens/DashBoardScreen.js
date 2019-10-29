import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Avatar} from 'react-native-elements';



const DashBoardScreen = ()=>{
return (


    <View style={{backgroundColor:'#f1f1f1', flex:1}} >
    <FlatList
        data={[
        { name: 'USRS', background: '#3498db', icon: 'user' },
        { name: 'Posts', background: '#ef0202', icon: 'gratipay' },
        { name: 'Search', background: '#efcf02', icon: 'search' },
        { name: 'Team', background: '#02ef1d', icon: 'users' }
        ]}
        renderItem={({ item }) => (
            <View style={styles.container}>
            <Avatar
            rounded
            size='xlarge'
            icon={{name: item.icon, type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 1, marginLeft: 20, marginTop: 50}}
            overlayContainerStyle={{backgroundColor: item.background}}
            />
            <Text style={{paddingLeft:70, fontSize:20, fontWeight:'200'}}>{item.name}</Text>
            </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item.name}
        />
    </View>
    );

}

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        justifyContent: 'space-between',
    }
});
export default DashBoardScreen;