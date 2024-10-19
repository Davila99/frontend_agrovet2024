import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Button,
} from "react-native";

const Veterinarios = () => {
  const [selectedVeterinarian, setSelectedVeterinarian] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const veterinarios = [
    {
      id: "1",
      name: "Dr. Juan Pérez",
      specialty: "Veterinaria de pequeños animales",
      location: "Managua",
      experience: 5,
      consultations: 150,
      likes: 120,
      image:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/450846346_1654253561993956_5392783358307727618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2R90LnugY8sQ7kNvgF8ISew&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AJ8XrFYSuu2i3EsieT9SQNP&oh=00_AYDOZ_DbV87PiuzunCJmBuAs8wm3JQrAPqDzkX3uxvrBCQ&oe=6718F2AF",
    },
    {
      id: "2",
      name: "Dra. María López",
      specialty: "Cirugía veterinaria",
      location: "Granada",
      experience: 10,
      consultations: 200,
      likes: 180,
      image:
        "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/272412038_1802788383264301_2171061510320588778_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Cgc0XwgA-bcQ7kNvgF21jjJ&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AAloJ4Trspivm200xNK0PaU&oh=00_AYC5fYPVdeMiHo_aUGenTStXXqN7tCLW1He3UEjV6Opo3Q&oe=6718DC4D",
    },
    {
      id: "3",
      name: "Dr. Carlos García",
      specialty: "Veterinaria de grandes animales",
      location: "León",
      experience: 8,
      consultations: 100,
      likes: 90,
      image:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/431667393_1109506166917942_8904079740543941874_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OzKvr1mdVA4Q7kNvgEQjll1&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=ANLk09B4Sy6HM3smwC7cyOm&oh=00_AYAk2dX0Bnl5gHSePjAhPN7ci0QqkJwY4tgom1x1zmFZLw&oe=6718D654",
    },
    {
      id: "4",
      name: "Dra. Ana Fernández",
      specialty: "Dermatología veterinaria",
      location: "Masaya",
      experience: 3,
      consultations: 75,
      likes: 60,
      image:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/461560659_1735288333953646_8489763119022840405_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HKUKF2aq6FoQ7kNvgEx5iB_&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=A0S4350ySniekGXUGnlk6dr&oh=00_AYDDOtTZ6E_b2GPcoXLBjKglxdlkbDlRE78IeZ9QnMQeBA&oe=6718E150",
    },
  ];

  const openModal = (veterinarian) => {
    setSelectedVeterinarian(veterinarian);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedVeterinarian(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.veterinarianContainer}
      onPress={() => openModal(item)}
    >
      <Image source={{ uri: item.image }} style={styles.veterinarianImage} />
      <View style={styles.veterinarianInfo}>
        <Text style={styles.veterinarianName}>{item.name}</Text>
        <Text style={styles.veterinarianSpecialty}>{item.specialty}</Text>
        <Text style={styles.veterinarianLocation}>
          Ubicación: {item.location}
        </Text>
        <Text style={styles.veterinarianExperience}>
          Años de experiencia: {item.experience}
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsColumn}>
          <Text style={styles.statsText}>
            Consultas atendidas: {item.consultations}
          </Text>
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
        keyExtractor={(item) => item.id}
      />

      {/* Modal para mostrar detalles del veterinario */}
      {selectedVeterinarian && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={{ uri: selectedVeterinarian.image }}
                style={styles.modalImage}
              />
              <Text style={styles.modalName}>{selectedVeterinarian.name}</Text>
              <Text style={styles.modalSpecialty}>
                {selectedVeterinarian.specialty}
              </Text>
              <Text>Ubicación: {selectedVeterinarian.location}</Text>
              <Text>Años de experiencia: {selectedVeterinarian.experience}</Text>
              <Text>Consultas atendidas: {selectedVeterinarian.consultations}</Text>
              <Text>Likes: {selectedVeterinarian.likes}</Text>

              {/* Botones de cerrar y enviar mensaje */}
              <View style={styles.modalButtons}>
                <Button title="Cerrar" onPress={closeModal} />
                <Button
                  title="Enviar Mensaje"
                  onPress={() => {
                    // Lógica para enviar mensaje
                    alert("Mensaje enviado a " + selectedVeterinarian.name);
                    closeModal();
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  veterinarianContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
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
    fontWeight: "bold",
    color: "#007AFF",
  },
  veterinarianSpecialty: {
    fontSize: 14,
    color: "#555",
  },
  veterinarianLocation: {
    fontSize: 12,
    color: "#555",
  },
  veterinarianExperience: {
    fontSize: 12,
    color: "#555",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    flex: 1,
  },
  statsColumn: {
    flex: 1,
    alignItems: "flex-end",
  },
  statsText: {
    fontSize: 12,
    color: "#555",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  modalName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSpecialty: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row", // Cambiado a row para colocar botones en línea
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
});

export default Veterinarios;
