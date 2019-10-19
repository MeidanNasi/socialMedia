import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Input } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../components/Spacer';
import { navigate } from '../navigationRef';


class AddPhoto extends React.Component {

    state = {
        title: '',
        uri: '',
        modalVisible: false
    }


    handleChoosePhoto = ()=>{
        const options = { noData: true};
        ImagePicker.showImagePicker(options, (response)=>{
            console.log("response:", response);
            if(response.uri){
                this.setState({uri: response.uri});
            }
        });
    };

    render(){

        const title = this.state.title;
        const uri = this.state.uri;
        const modalVisible = this.state.modalVisible;

        return(

            <View style={styles.container}>

            <Input 
                onChangeText={ (title)=>this.setState({ title: title })}
                value={title} 
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
                raised
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

            <Spacer/>

            <Button 
                onPress={()=>{ 
                               if(!this.state.title){ 
                                this.setState({modalVisible: true}) 
                               } else{
                                   navigate('Account', {uri} )
                               }
                             }}
                title="Submit"
                type="solid"
                raised
            />
            <Modal
            isVisible={modalVisible}
            animationType="slide"
            style={{
                marginLeft:55,
                width: '50%',
                height: '50%'}}
            >
                <View style={styles.modal}>
                    <Text style={styles.errorMassage}> PLEASE ENTER TITLE AND PHOTO </Text>
                <Button
                title="Got it"
                type="solid"
                raised
                onPress={()=> this.setState({modalVisible:false})}
                />
                </View>
            </Modal>
        </View>

        )

    }
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
    },
    image:{
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 1,
            borderRadius: 50
    }

});

export default AddPhoto;