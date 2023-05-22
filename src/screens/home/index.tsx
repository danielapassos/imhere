import { Alert, Text, TextInput, View, TouchableOpacity, FlatList } from "react-native";

import Participant from "../../componentes/Participant";

import { styles } from "./styles";

export function Home() {

  const participants = [`Dani`, `Douglas`, `Drake`, `Haami`, `Ana`, `Isa`, `Jaque`, `John`, `Lucas`]

  
  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, 
    [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
      <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text
        style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>
      
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Participant 
          key = {item}
          name={item}
          onRemove={() => handleParticipantRemove(`Daniela`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
        />
      
    </View>
  )
}