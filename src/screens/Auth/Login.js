import React from 'react'
import { TextInput, View, Text,StyleSheet, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import FAB from '../../component/FAB'
import { styles } from '../../stylesheets/styles'
import Logo from '../../component/svgs/Logo'
import { Button } from 'react-native-web'
import RadioButton from '../../component/RadioButton'

class Login extends React.Component {

    state = {
        email:'',
        password:'',
        type:'0'
    }

    handlePress = (event) => {
        this.props.next(true)
        console.log(true)
        event.preventDefault();
    }

    radioClick = (val) => {
        this.setState({type:val})
    }

    render()
    {
        const { navigation,next } = this.props
        return (
            <View style={styles.adminHolder}>
                <View style={{flex:1}}>
                    <Logo fill="#ff6600" style={[styles.logoSize]}/>
                </View>
                <View style={{flex:1}}>
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
                    <Pressable onPress={() => this.radioClick('0')}>
                        <RadioButton selected={this.state.type=='0'}  text="Employer"/>
                    </Pressable>
                    <Pressable onPress={() => this.radioClick('1')}>
                        <RadioButton selected={this.state.type=='1'} text="Employee"/>
                    </Pressable>
                </View>
                <FAB onClick={this.handlePress}/>
                <StatusBar style='auto'/>
            </View>
        )
    }
}

export default Login;