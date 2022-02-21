import { StyleSheet } from "react-native";
import vars from './_variables.js'

export const styles = StyleSheet.create({
    adminHolder:{
        padding:25,
        maxWidth: vars.$containerWidth,
        width: '100%',
        backgroundColor: vars.$primaryBg,
        flex:1,
        justifyContent: 'center',
        marginLeft:'auto',
        marginRight:'auto'
    },

    inputField:{
        borderBottomWidth: 2,
        borderRadius: 0 ,
        height: 'auto',
        marginBottom:4
    },

    fab:{
        backgroundColor: vars.$primary,
        width:60,
        height:60,
        position: 'absolute',
        bottom:25,
        right:25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoSize:{
        width:100,
        height:100,
        marginLeft:'auto',
        marginRight:'auto',
    }
});