import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Veterinarios = () => {
  // Lista de veterinarios de ejemplo
  const veterinarios = [
    {
      id: '1',
      name: 'Dr. Juan Pérez',
      specialty: 'Veterinaria de pequeños animales',
      location: 'Managua',
      experience: 5,
      consultations: 150, // Cantidad de consultas atendidas
      likes: 120, // Cantidad de likes
      image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/450846346_1654253561993956_5392783358307727618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2R90LnugY8sQ7kNvgF8ISew&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AJ8XrFYSuu2i3EsieT9SQNP&oh=00_AYDOZ_DbV87PiuzunCJmBuAs8wm3JQrAPqDzkX3uxvrBCQ&oe=6718F2AF',
    },
    {
      id: '2',
      name: 'Dra. María López',
      specialty: 'Cirugía veterinaria',
      location: 'Granada',
      experience: 10,
      consultations: 200,
      likes: 180,
      image: 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/272412038_1802788383264301_2171061510320588778_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Cgc0XwgA-bcQ7kNvgF21jjJ&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AAloJ4Trspivm200xNK0PaU&oh=00_AYC5fYPVdeMiHo_aUGenTStXXqN7tCLW1He3UEjV6Opo3Q&oe=6718DC4D',
    },
    {
      id: '3',
      name: 'Dr. Carlos García',
      specialty: 'Veterinaria de grandes animales',
      location: 'León',
      experience: 8,
      consultations: 100,
      likes: 90,
      image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/431667393_1109506166917942_8904079740543941874_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OzKvr1mdVA4Q7kNvgEQjll1&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=ANLk09B4Sy6HM3smwC7cyOm&oh=00_AYAk2dX0Bnl5gHSePjAhPN7ci0QqkJwY4tgom1x1zmFZLw&oe=6718D654',
    },
    {
      id: '4',
      name: 'Dra. Ana Fernández',
      specialty: 'Dermatología veterinaria',
      location: 'Masaya',
      experience: 3,
      consultations: 75,
      likes: 60,
      image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/461560659_1735288333953646_8489763119022840405_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HKUKF2aq6FoQ7kNvgEx5iB_&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=A0S4350ySniekGXUGnlk6dr&oh=00_AYDDOtTZ6E_b2GPcoXLBjKglxdlkbDlRE78IeZ9QnMQeBA&oe=6718E150',
    }
    ,
    {
      id: '5',
      name: 'Dr. Carlos García',
      specialty: 'Veterinaria de grandes animales',
      location: 'León',
      experience: 8,
      consultations: 100,
      likes: 90,
      image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/278342294_1160176291403780_4455004864145461318_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3mLgXQP4DWUQ7kNvgEWRbQC&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=Am2bJK0EftWO4HTHs1ngBwt&oh=00_AYAyu-HmXo1FeWiWII0FSIwUTmhCjMp4WtCZM4Ru6xiWhA&oe=67191248',
    },
    {
      id: '6',
      name: 'Dra. Ana Fernández',
      specialty: 'Dermatología veterinaria',
      location: 'Masaya',
      experience: 3,
      consultations: 75,
      likes: 60,
      image: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/461560659_1735288333953646_8489763119022840405_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HKUKF2aq6FoQ7kNvgEx5iB_&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=A0S4350ySniekGXUGnlk6dr&oh=00_AYDDOtTZ6E_b2GPcoXLBjKglxdlkbDlRE78IeZ9QnMQeBA&oe=6718E150',
    },
    // Agrega más veterinarios con sus respectivas imágenes
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.veterinarianContainer}>
      <Image source={{ uri: item.image }} style={styles.veterinarianImage} />
      <View style={styles.veterinarianInfo}>
        <Text style={styles.veterinarianName}>{item.name}</Text>
        <Text style={styles.veterinarianSpecialty}>{item.specialty}</Text>
        <Text style={styles.veterinarianLocation}>Ubicación: {item.location}</Text>
        <Text style={styles.veterinarianExperience}>Años de experiencia: {item.experience}</Text>
      </View>

      {/* Nueva sección para consultas y likes en columnas paralelas */}
      <View style={styles.statsContainer}>
        <View style={styles.statsColumn}>
          <Text style={styles.statsText}>Consultas atendidas: {item.consultations}</Text>
        </View>
        <View style={styles.statsColumn}>
          <Text style={styles.statsText}>Likes: {item.likes}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={veterinarios}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  veterinarianContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  veterinarianImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  veterinarianInfo: {
    flex: 1,
  },
  veterinarianName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  veterinarianSpecialty: {
    fontSize: 14,
    color: '#555',
  },
  veterinarianLocation: {
    fontSize: 12,
    color: '#555',
  },
  veterinarianExperience: {
    fontSize: 12,
    color: '#555',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10, // Espacio entre la info del veterinario y las estadísticas
    flex: 1, // Para permitir que ocupe el espacio disponible
  },
  statsColumn: {
    flex: 1, // Cada columna ocupa un espacio igual
    alignItems: 'flex-end', // Alinear el texto a la derecha
  },
  statsText: {
    fontSize: 12,
    color: '#555',
  },
});

export default Veterinarios;
