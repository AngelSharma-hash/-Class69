import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default class Transaction extends React.Component{

    constructor(){
        super();
        this.state={
            buttonState:'normal',
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
            
        }
    }

    getCamerPermission= async() =>{
        var {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            buttonState:'clicked',
            hasCameraPermission:status === 'granted',
            scanned:false,

        })
    }

    handleBarCodeScanner = async({data})=>{
        this.setState({
            buttonState:'normal',
            scannedData:data,
            scanned:true,

        })
    }


    render(){
        var hasCameraPermission = this.state.hasCameraPermission;
        var buttonState = this.state.buttonState;
        var scanned = this.state.scanned;
        if(buttonState== 'clicked' && hasCameraPermission){
            return(
                <BarCodeScanner style = {StyleSheet.absoluteFillObject } onBarCodeScanned={ scanned ? undefined : this.handleBarCodeScanner}></BarCodeScanner>
            )
        }
        else{
            return(
                <View>
                    <Text>TransactionScreens</Text>
                <TouchableOpacity onPress={this.getCamerPermission}>
                    <Text>Scan QR Code</Text></TouchableOpacity>
                <Text>{hasCameraPermission ? this.state.scannedData : 'Require camera permission'}</Text></View>
            )
        }
      
    }
    
}