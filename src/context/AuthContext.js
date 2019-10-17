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
        case 'login':
            return { errorMassage:'' , token: action.payload };
        case 'clear_error_message':
            return {...state, errorMassage: ''};
        default:
            return state;
    }
};



const clearErrorMessage = dispatch => () =>{
    dispatch({type:'clear_error_message'});
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
    return async ( { email, password } )=>{
        try{
            const response = await Api.post('/usr/login',
            { 
                email: email, 
                password: password 
            } 
            );
            console.log("response:"+response);
            navigate('DashBoard');
            // await AsyncStorage.setItem('token', response.data.token);
            // dispatch({ type: 'login', payload: response.data.token });
        }catch(err){
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with login'
            });
        }
    };
};


const logout = (dispatch) =>{
    return ()=>{
        // logout somehow
    };
};

export const { Provider, Context} = createDataContext(
        authReducer,
        { signup, login, logout, clearErrorMessage },
        { token : null, errorMassage: '' } 
    );
