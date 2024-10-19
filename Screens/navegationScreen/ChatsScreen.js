import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';

const ChatsScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hola, ¿cómo estás?', sender: 'other' },
    { id: '2', text: 'Todo bien, ¿y tú?', sender: 'me' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Manejo de errores

  // Simular una llamada a la API de IA
  const fetchAIResponse = async (query) => {
    setIsLoading(true);
    setErrorMessage(''); // Reiniciar mensaje de error
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_API_KEY`, // Reemplazar con tu API_KEY
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // o el modelo que estés usando
          messages: [{ role: "user", content: query }],
          max_tokens: 100,
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content.trim(); // Usar la nueva estructura
      }
      return 'Lo siento, no obtuve una respuesta válida.';
    } catch (error) {
      console.error('Error al obtener respuesta de la IA:', error);
      setErrorMessage('Lo siento, algo salió mal. Inténtalo de nuevo más tarde.'); // Actualizar mensaje de error
      return null; // Asegúrate de retornar null en caso de error
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const message = {
        id: (messages.length + 1).toString(),
        text: newMessage,
        sender: 'me',
      };
      setMessages([...messages, message]);
      setNewMessage('');

      // Obtener la respuesta de la IA
      const aiResponse = await fetchAIResponse(newMessage);
      if (aiResponse) { // Solo agregar el mensaje si hay una respuesta válida
        const aiMessage = {
          id: (messages.length + 2).toString(),
          text: aiResponse,
          sender: 'other',
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      }
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.theirMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatList}
        inverted // Mostrar los últimos mensajes abajo
      />

      {/* Indicador de carga mientras se espera la respuesta de la IA */}
      {isLoading && <ActivityIndicator size="large" color="#075e54" />}
      
      {/* Mensaje de error si ocurre */}
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      {/* Input para enviar mensaje */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escribe una consulta para la IA"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  chatList: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#075e54',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ChatsScreen;
