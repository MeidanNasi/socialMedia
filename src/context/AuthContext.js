import createDataContext from './createDataContext';
import Api from '../api/index';
//import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) =>{
    switch (action.type){
        case 'add_error':
            return { ...state, errorMassage: action.payload };
        case 'signup':
            return { errorMassage:'' , token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) =>{
     return async ( { email, password } )=>{
        try{
            const response = await Api.post('/usr/register',
             { 
                 email: email, 
                 password: password 
            }
            );
            console.log("response:"+response);
            navigate('DashBoard');
            // await AsyncStorage.setItem('token', response.data.token);
            // dispatch({ type: 'signup', payload: response.data.token });
            
        } catch(err){
            dispatch({ type: 'add_error', payload: 'Something went worng with signing up!'})
        }
    };
};



const login = (dispatch) =>{
    return ( { email, password } )=>{
        //try to login
        //handle success/failure
    };
};

const logout = (dispatch) =>{
    return ()=>{
        // logout somehow
    };
};

export const { Provider, Context} = createDataContext(
        authReducer,
        { signup, login, logout },
        { token : null, errorMassage: '' } 
    );
