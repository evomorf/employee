import React from 'react'
import { TextInput, View, Text,StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import FAB from '../../component/FAB'
import { styles } from '../../stylesheets/styles'

class Login extends React.Component {

    state = {
        email:'',
        password:''
    }

    render()
    {
        return (
            <View style={styles.adminHolder}>
                <Text>Email</Text>
                <TextInput style={styles.inputField}
                    placeholder="Email"
                    onChange={(email)=>this.setState({email:email})}
                />
                <Text>Password</Text>
                <TextInput style={styles.inputField}
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