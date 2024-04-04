import IMG from '../screens/assets/evento.png'
import { View, Image } from 'native-base'

const CardDescription = () => {
  return (

        <View >
            <Image source={IMG} style ={{ width: 200, height: 360 ,display: 'flex' }} />
        </View>
  )
}

export default CardDescription