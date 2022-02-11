import { View } from 'react-native'
import styles from '../css/main.scss'
import BackNext from './svgs/BackNext';
const FAB = ({}) => {
    return (
        <View style={styles['fab']}>
            <BackNext fill="#ffffff" style={{width:25,height:25}}/>
        </View>
    )
}

export default FAB;