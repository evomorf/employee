import { Button, Pressable } from 'react-native'
import BackNext from './svgs/BackNext';
import {styles} from '../stylesheets/styles'



const FAB = ({onClick}) => {
   
    return (
        <Pressable style={styles.fab} onPress={onClick}>
            <BackNext fill="#ffffff" style={{width:25,height:25}}/>
        </Pressable>
      
    )
}

export default FAB;