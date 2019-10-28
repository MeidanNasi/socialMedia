import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import Spacer from '../components/Spacer';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-picker';



class AccountScreen extends React.Component{

state={
    images:[],
    isVisiable: false,
    imageToDisplay: '',
    titleToDisplay: '',
    followers: 0,
    following: 0,
    posts: 0, 
    profilepic: "content://com.google.android.apps.photos.contentprovider/-1/1/content%3A%2F%2Fmedia%2Fexternal%2Fimages%2Fmedia%2F2224/ORIGINAL/NONE/494517713"
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
                profilepic : source
            });         
          }
        }); 
} 

render()
{
    
    const uri = this.props.navigation.state.params.image_url;
    const title = this.props.navigation.state.params.title;
    const modalVisible = this.state.isVisible;
    const profilepic = this.state.profilepic

    let x = this.state.images.find((element)=> element.uri === uri);
    if(x === undefined){ // preventing duplicating photo while rendering
    this.state.images.push({ uri:uri, title:title });
    this.state.posts++;}



    return(

        <ScrollView style={{flex:1, backgroundColor:'#f1f1f1'}}>

 
        <Spacer/>

            <View style={{alignItems:'center'}}>
                <Avatar
                size='xlarge'
                showEditButton='true'
                rounded
                onEditPress={()=>this.handleChoosePhoto()}
                source={{ uri: profilepic }}
                />
                <Text style={{fontSize: 40}}>Barack Obama</Text>
            </View>
        
        <Spacer/>

            <View style={{flexDirection: 'row',justifyContent: 'space-around', borderColor:'gray', borderWidth:1}}>
                <Text>Posts: {this.state.posts}</Text>
                <Text>Following: {this.state.following}</Text>
                <Text>Followers: {this.state.followers}</Text>
            </View>

        <Spacer/>


            <View style={{ alignItems:'center' }}>
            <FlatList
                //style={{borderColor:'black', borderWidth:2, paddingLeft:5, paddingTop:5, paddingRight:5, paddingVertical:5}}
                data={this.state.images}
                renderItem={({ item }) => (
                    <View style={{borderColor:'gray', borderWidth:1, paddingLeft:5, paddingTop:5, paddingRight:5, paddingVertical:5}}>
                    <Avatar
                    size='large'
                    source={{ uri: item.uri }}
                    onPress={()=>{ this.setState({isVisible: true, imageToDisplay: item.uri, titleToDisplay: item.title}) }}
                    />
                    </View>
                )}
                numColumns={4}
                keyExtractor={(item) => item.title}
                />
            </View>


        <Spacer/>


        <Modal
                isVisible={modalVisible}
                animationType="slide"
                style={styles.oval}
                >
                    <View style={{alignItems:'center'}}>

                        <Text 
                        style={{fontSize:30, 
                                textAlign:'center'
                                }}>

                        {this.state.titleToDisplay}

                        </Text>
             <Spacer/>
                        <Image
                         source={{uri: this.state.imageToDisplay}}
                         style={{width:300, height:300, borderWidth:1,
                         borderColor:'black',}} />

                    </View>

            <Spacer/>
                    <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Icon
                            name="heart"
                            size={35}
                            color="black"
                        />
                        <Icon
                            name="comment"
                            size={35}
                            color="black"
                        />
                        <Icon
                            name="trash"
                            size={35}
                            color="black"
                        />

                        <Icon
                            name="location"
                            size={35}
                            color="black"
                        />
                        
                    </View>

            <Spacer/>

                    <View style={{ alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity>
                            <Text style={{fontSize:15, color:'gray'}}>View all comments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:15, color:'gray'}}>View all likes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{alignItems: 'center', paddingTop:20}}>
                    <TouchableOpacity onPress={()=> this.setState({isVisible:false})} >
                            <Icon
                                name="close"
                                size={20}
                                color="gray"
                            />
                            </TouchableOpacity>
                    </View>
            </Modal>

        </ScrollView>
    )
}






};
const styles = StyleSheet.create({
    oval: {
        width: 325,
        borderRadius: 50,
        backgroundColor: '#e4e4e4',
        borderWidth:1,
        borderColor:'gray',
        transform: [
          {scaleX:2}
        ]
    }
});
export default AccountScreen;