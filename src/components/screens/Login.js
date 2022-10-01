import React from "react";
import Icon  from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from 'yup';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Alert,
    Image,
    TextInput
  } from 'react-native';

  const myIcon1 = <Icon name="comments" size={30} color="#900" />;
  
export default class Login extends React.Component{
    constructor (){
        super();
        this.state={
            hidePassword: true
        }
    }

    _handleSubmit = () => {
        alert('Form was submitted');
    }

    render(){
        return(
            <SafeAreaView style={style.body}>
                <ScrollView>
                <View style= {style.header}>
                    <Text style={style.title}>Sign In</Text>
                </View>
                <View style= {style.logo_area}>
                    <Image resizeMode="contain" source={require('../../../assets/images/home.png')}></Image>
                </View>
                <View style= {style.board}>


                    <Formik initialValues={{
                        username: '',
                        password:''
                    }}
                            onSubmit={this._handleSubmit}
                            validationSchema={Yup.object().shape({
                                username: Yup.string().required(" Username is required"),
                                password:Yup.string().required("Password should be entered")
                            })}>
                    {({ 
                        values, handleSubmit , handleChange, errors
                    }) => (
                    <View>
                        <View style={style.item}>
                            <TextInput
                            value={values.username}
                            onChangeText={handleChange('username')}
                            placeholder="Username" 
                            style={style.input}></TextInput>
                            {(errors.username) && <Text style ={style.alert}>{errors.username}</Text>}
                        </View>


                        <View style={style.item}>
                            <TextInput
                            value ={values.password}
                            onChangeText = {handleChange('password')}
                            secureTextEntry ={this.state.hidePassword}
                            placeholder="Password" 
                            style={style.input}></TextInput>
                            {(errors.password) && <Text style ={style.alert}>{errors.password}</Text>}

                            <TouchableOpacity onPress={() => this.setState({hidePassword:!this.state.hidePassword})} style={{position:'absolute', right:15, top:25}}>
                                <Icon name={(this.state.hidePassword) ? "eye-slash" : 'eye'} size={22}></Icon>
                            </TouchableOpacity>

                        </View>
                        <View style={style.item1}>
                            <Text style={{color:'#525464', fontSize:15}}>Forgot your password?</Text>
                        </View>
                        <View style={style.item}>
                            <TouchableOpacity onPress={handleSubmit}
                                style={style.button}>
                                <Text style={{textAlign:'center' ,color:'white', fontSize:16, fontWeight:'700'}}>Login</Text></TouchableOpacity>
                        </View> 
                    </View>)
                    
                    }
                    </Formik>




                    <View style={style.item}><Text style={{textAlign:'center'}}>or</Text></View>
                    <View style={style.social}>
                        <TouchableOpacity style={style.socialitem}><Image style={{width:8, height:15}} source={require('../../../assets/images/facebook.png')}></Image></TouchableOpacity>
                        <TouchableOpacity style={style.socialitem}><Image style={{width:20, height:16}} source={require('../../../assets/images/twitter.png')}></Image></TouchableOpacity>
                        <TouchableOpacity style={style.socialitem}><Image style={{width:16, height:16}} source={require('../../../assets/images/linkedin.png')}></Image></TouchableOpacity>
                    </View>
                    <View style={style.item}><TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                        <Text>Don't have an account?<Text style={{color:'#FFB19D'}}> Sign Up</Text></Text>
                        </TouchableOpacity></View>
        
                </View>
                </ScrollView>
            </SafeAreaView>
        ) 
    }
}

const style = StyleSheet.create({
    body:{backgroundColor: 'white', flex:1, marginTop:10},
    header:{padding:10, justifyContent:'center', alignItems:'center'},
    title:{fontWeight:'700', color:'#525464', fontFamily:'Gilroy-SemiBold', fontSize:22},
    logo_area:{alignItems:'center', marginTop:40},
    board:{marginTop:40, paddingHorizontal:30},
    item:{marginBottom:5, marginTop:5},
    item1:{flexDirection:'row', justifyContent:'flex-end'},
    input:{borderWidth:1, borderColor:'#B0B0C3' , backgroundColor:'#F7F7F7', paddingVertical:5, paddingHorizontal:30, height:60},
    button:{marginTop:20, backgroundColor:'#20C3AF', paddingVertical:20, borderRadius:5, alignItems:'center', justifyContent:'center'},
    socialitem:{
        padding:5,
        width:100,
        height:60,
        justifyContent:"center",
        alignItems:'center'
    },
    social:{
        flexDirection:'row',
        justifyContent:'space-around'

    },
    alert:{color:'red', fontSize:15}
})