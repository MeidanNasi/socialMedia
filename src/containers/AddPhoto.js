import React from 'react';
import { View, StyleSheet, Text,ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Input } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../components/Spacer';
import { navigate } from '../navigationRef';
import Api from '../api/index';



class AddPhoto extends React.Component {

    state = {
        title: '',
        image_url: '',
        modalVisible: false
    }


    handleChoosePhoto = ()=>{
        const options = { noData: true};
        ImagePicker.showImagePicker(options, (response)=>{
            if (response.didCancel) {
                console.log('User cancelled photo picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                let source = response.uri;
                this.setState({
                    image_url: source
                });         
              }
            }); 
    } 



    render(){


        const title = this.state.title;
        const image_url = this.state.image_url;
        const modalVisible = this.state.modalVisible;
        
        
        const postToApi = async () =>{
            console.log({
                title: this.state.title,
                image_url: this.state.image_uri
            })
            try{
                const response = await Api.post('/post/add-post',
                { 
                    title: this.state.title,
                    image_url: "data:image/png;base64,"+this.state.image_url
                }
                );
                console.log("response:"+JSON.stringify(response));               
            } catch(err){
                console.log(JSON.stringify(err));
 
            }
        };

        return(
            <ImageBackground source={require('../images/cam.jpg')} style={{flex: 1}}>

                
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
                title="Submit"
                onPress={()=>{ 
                               if(!this.state.title){ 
                                this.setState({modalVisible: true}) 
                               } else{
                                   //postToApi();
                                   navigate('Account', {image_url, title} )
                                   console.log({image_url, title});
                               }
                             }}
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

            {console.log({title, image_url})}

        </View>
        </ImageBackground>
        )

    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 150,
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