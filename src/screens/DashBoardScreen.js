import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const DashBoardScreen = ()=>{
return (

    <View>

        <Text style={{fontSize: 48 }}>DashBoardScreen</Text>
        <Icon
                name='infocirlce'
                color="#4F8EF7"
                size={30}
            />


    </View>

    );

}

const styles = StyleSheet.create({});
export default DashBoardScreen;