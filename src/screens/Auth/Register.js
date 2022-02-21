import { View,Text } from 'react-native'
import React from 'react'
import { styles } from '../../stylesheets/styles'

class Register extends React.Component {
    state = {
        form:{
            fname:'',
            lname:'',
            email:'',
            password:''
        }
    }

    render() {
        const { navigation,next } = this.props
        return (
            <View style={styles.adminHolder}>
                <Text>Register</Text>
            </View>
        )
    }
}

export default Register;