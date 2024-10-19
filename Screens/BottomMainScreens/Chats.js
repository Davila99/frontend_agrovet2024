import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Necesitarás instalar @expo/vector-icons si no lo tienes

const Chats = () => {
  const contacts = [
    { id: '1', name: 'Juan Pérez', phone: '123-456-7890', image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/450846346_1654253561993956_5392783358307727618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2R90LnugY8sQ7kNvgF8ISew&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AJ8XrFYSuu2i3EsieT9SQNP&oh=00_AYDOZ_DbV87PiuzunCJmBuAs8wm3JQrAPqDzkX3uxvrBCQ&oe=6718F2AF' },
    { id: '2', name: 'María López', phone: '234-567-8901', image: 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/272412038_1802788383264301_2171061510320588778_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Cgc0XwgA-bcQ7kNvgF21jjJ&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AAloJ4Trspivm200xNK0PaU&oh=00_AYC5fYPVdeMiHo_aUGenTStXXqN7tCLW1He3UEjV6Opo3Q&oe=6718DC4D' },
    { id: '3', name: 'Carlos García', phone: '345-678-9012', image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/431667393_1109506166917942_8904079740543941874_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OzKvr1mdVA4Q7kNvgEQjll1&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=ANLk09B4Sy6HM3smwC7cyOm&oh=00_AYAk2dX0Bnl5gHSePjAhPN7ci0QqkJwY4tgom1x1zmFZLw&oe=6718D654' },
    { id: '4', name: 'Ana Fernández', phone: '456-789-0123', image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/461560659_1735288333953646_8489763119022840405_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HKUKF2aq6FoQ7kNvgEx5iB_&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=A0S4350ySniekGXUGnlk6dr&oh=00_AYDDOtTZ6E_b2GPcoXLBjKglxdlkbDlRE78IeZ9QnMQeBA&oe=6718E150' },
  ];

  const handleForward = (contact) => {
    // Aquí puedes manejar el reenviar el contacto a un evento
    console.log(`Reenviando contacto: ${contact.name}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.contactContainer}>
      <Image source={{ uri: item.image }} style={styles.contactImage} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
      <TouchableOpacity onPress={() => handleForward(item)}>
        <Ionicons name="share-outline" size={24} color="#25D366" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ddd5', // Color similar al fondo de WhatsApp
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#075E54', // Color verde oscuro similar a WhatsApp
  },
  contactPhone: {
    fontSize: 14,
    color: '#555',
  },
});

export default Chats;
