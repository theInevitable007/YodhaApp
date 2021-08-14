import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import  db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            Name: '',
            emailId: '',
            address: '',
            contact: '',
            password: '',
            confirmPassword: ''
        }
    }
    userSignUp=(emailId, password, confirmPassword)=>{
      if (password!==confirmPassword){
        Alert.alert("Passwords dont match")
      }else{
        firebase.auth().createUserWithEmailAndPassword(emailId, password).then((response)=>{
           Alert.alert("User Added Successfully")
           this.props.navigation.navigate("LoginScreen")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage= error.message;
            console.log(errorCode)
            return alert(errorMessage);
        });
      }
    };
    render() {
        return (
            
            <View>
              <ScrollView style={{width:'100%'}}>
                <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                <Text
                  style={{justifyContent:'center', alignSelf:'center', fontSize:30,color:'#ff5722',marginTop:50,
                  marginLeft: 50,
                  marginRight: 50,
                   marginBottom:30}}
                  >Registration</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Name"}
                  maxLength ={8}
                  onChangeText={(text)=>{
                    this.setState({
                      Name: text
                    })
                  }}
                />
               
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Contact"}
                  maxLength ={10}
                  keyboardType={'numeric'}
                  onChangeText={(text)=>{
                    this.setState({
                      contact: text
                    })
                  }}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Address"}
                  multiline = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      address: text
                    })
                  }}
                />
                
      
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Email-ID"}
                  keyboardType ={'email-address'} 
                  onChangeText={(text)=>{
                    this.setState({
                      emailId: text
                    })
                  }}
                /><TextInput
                  style={styles.formTextInput}
                  placeholder ={"Password"}
                  secureTextEntry = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                /><TextInput
                  style={styles.formTextInput}
                  placeholder ={"Confrim Password"}
                  secureTextEntry = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      confirmPassword: text
                    })
                  }}
                />
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={()=>
                      this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword)
                    }
                  >
                  <Text style={styles.registerButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
        );
    };
};
