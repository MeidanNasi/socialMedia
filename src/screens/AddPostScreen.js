import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { Button, Input } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../components/Spacer';

class AddPostScreen extends React.Component {

    state = {
        title: '',
        uri: ''
    }


    handleChoosePhoto = ()=>{
        const options = { noData: true};
        ImagePicker.showImagePicker(options, (response)=>{
            console.log("response:", response);
            if(response.uri){
                this.setState({uri: response});
            }

        });
    };

    render(){
        return(
            <View style={styles.container}>
            <Input 
                onChangeText={ (title)=>this.setState({ title: title })}
                value={this.state.title} 
                autoCorrect={false}
                placeholder="Image title"
                leftIcon={
                    <Icon
                        name="pencil-square-o"
                        size={20}
                        color='black'
                    />
                }
                
            />

            <Spacer/>

            <Button
                large  
                title="  Choose Photo"
                onPress={this.handleChoosePhoto}
                icon={
                    <Icon
                      name="plus"
                      size={15}
                      color="white"
                    />
                }
                buttonStyle={{ width: 230, backgroundColor: '#A2A2D0' , borderRadius: 5 }}
            />
            </View>
        )

    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
export default AddPostScreen;