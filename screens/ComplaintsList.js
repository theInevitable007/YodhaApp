import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import  db from '../config';
import firebase from 'firebase';

export default class ComplaintsList extends Component{
    constructor(){
        super();
        this.state={
      
        }
    }

    render() {
        return (
            
            <View>
              <Text>ComplaintsList</Text>
            </View>
        );
    };
};
