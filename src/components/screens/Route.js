import React from 'react';
import { Image } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createDrawerNavigator} from "react-navigation-drawer";
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';

import Login from './Login';
import Register from './Register';


const AuthenticateStack = createStackNavigator({
    Login: {
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Register:{
        screen:Register,
        navigationOptions:{
            header:null
        }
    }
});


export  default createAppContainer(AuthenticateStack);
