import { View, Text,TouchableOpacity } from 'react-native';

import { stylesP } from './stylesP';

type Props = {
    name: string;
    onRemove: () => void;
}

export default function Participant( {name, onRemove} : Props){
    

    return(
        <View style={stylesP.container}>
            <Text style={stylesP.name}>
                {name}
            </Text>
            <TouchableOpacity style={stylesP.button} onPress={onRemove}>
                <Text
                style={stylesP.buttonText}>
                -
                </Text>
            </TouchableOpacity>
        </View>
    )
}