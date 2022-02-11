import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import FAB from '../../component/FAB'
import styles from '../../css/main.scss'

class Login extends React.Component {

    state = {
        email:'',
        password:''
    }

    render()
    {
        return (
            <View style={[styles['admin-holder']]}>
                <Text>Email</Text>
                <TextInput style={[styles['input-field']]}
                    placeholder="Email"
                    onChange={(email)=>this.setState({email:email})}
                />
                <Text>Password</Text>
                <TextInput style={[styles['input-field']]}
                    placeholder="Password"
                    secureTextEntry
                    onChange={(password)=>this.setState({password:password})}
                />
                    
                <FAB />
                <StatusBar style='auto'/>
            </View>
        )
    }
}

export default Login;