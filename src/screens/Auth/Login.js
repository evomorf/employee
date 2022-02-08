import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import FAB from '../../component/FAB'
import styles from '../../css/main.scss'
import Logo from '../../component/svgs/Logo'

class Login extends React.Component {

    state = {
        email:'',
        password:''
    }

    render()
    {
        return (
            <View style={[styles['admin-holder']]}>
                <View style={[styles['auth-head']]}>
                    <View style={[styles['auth-head-content']]}>
                    {/* <i><FingerPrint style="width-40 white-fill" /></i> */}
                </View>
                {/* <View style="diagonal-hol"><Diagonal style="white-fill"/></View> */}
                </View>
                <TextInput style={[styles['input-field']]}
                    placeholder="Email"
                    onChange={(email)=>this.setState({email:email})}
                />
                <TextInput style={[styles['input-field']]}
                    placeholder="Password"
                    secureTextEntry
                    onChange={(password)=>this.setState({password:password})}
                />
                    <Logo  fill='#FF5C87' />
                

                <FAB/>
                <StatusBar style='auto'/>
            </View>
        )
    }
}

export default Login;