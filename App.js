import React from "react";
//import Route from './src/Route.js';
import Icon from "react-native-vector-icons/FontAwesome";
import Route from "./src/components/screens/Route";
import { Formik } from "formik";

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Alert,
    TextInput
  } from 'react-native';

export default class App extends React.Component{
    render(){
        return <Route></Route>
    }
}