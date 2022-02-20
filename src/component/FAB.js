import { View } from 'react-native'
import BackNext from './svgs/BackNext';
import {styles} from '../stylesheets/styles'

const FAB = ({}) => {
    return (
        <View style={styles.fab}>
            <BackNext fill="#ffffff" style={{width:25,height:25}}/>
        </View>
      
    )
}

export default FAB;