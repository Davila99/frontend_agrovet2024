import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from "react-native";
import COLORS from "../../Constants/Colors";
<<<<<<< Updated upstream
import { Manager } from 'socket.io-client';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const VetList = () => {
  const navigation = useNavigation(); // Obtén el objeto de navegación
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const ws = new Manager('http://192.168.4.40:3000/socket.io/socket.io.js');

    const socket = ws.socket('/');

=======
import fonts from "../../config/fonts";
import { getChats } from "../../api";
import { Manager } from "socket.io-client";

const VetList = () => {
  useEffect(() => {
    const ws = new Manager("http://192.168.4.40:3000/socket.io/socket.io.js");

    const socket = ws.socket("/");

    //const ws = new WebSocket("http://192.168.42.250:3000/");
>>>>>>> Stashed changes
    ws.onopen = () => {
      console.log("Conexión establecida");
    };

    ws.onmessage = (e) => {
      console.log("Mensaje recibido:", e.data);
    };

    ws.onerror = (error) => {
      console.log("Error en la conexión:", error);
    };

    ws.onclose = () => {
      console.log("Conexión cerrada");
    };

    return () => {
      ws.close();
    };
  }, []);

<<<<<<< Updated upstream
  // Opciones del menú con iconos
  const menuOptions = [
    { label: 'Chats', action: () => navigation.navigate("ChatsScreen"), icon: "chat" },
    { label: 'Veterinarios', action: () => navigation.navigate("Veterinarians"), icon: "local-hospital" },
    { label: 'Agrónomos', action: () => navigation.navigate("Agronomists"), icon: "grass" },
    { label: 'Anuncios', action: () => console.log("Anuncios seleccionado"), icon: "announcement" },
    { label: 'Notific.', action: () => console.log("Notific. seleccionado"), icon: "notifications" },
    { label: 'Config.', action: () => console.log("Config. seleccionado"), icon: "settings" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => {
        item.action();
        setModalVisible(false); // Cierra el modal al seleccionar una opción
      }}
    >
      <Icon name={item.icon} size={24} color={COLORS.blue} style={styles.icon} />
      <Text style={styles.menuItemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.welcomeButton}>
          <Text style={styles.welcomeText}>Agrovet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.dropdownText}>Menú</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para el Menú Desplegable */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <FlatList
              data={menuOptions}
              renderItem={renderItem}
              keyExtractor={(item) => item.label}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
=======
  return (
    <View>
      <Text>Hola</Text>
>>>>>>> Stashed changes
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    paddingBottom: 40,
    paddingTop: 1,
  },
  header: {
    backgroundColor: COLORS.blue,
    height: 70,
    justifyContent: "space-between",
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  welcomeButton: {
    marginTop: 20,
  },
  welcomeText: {
    paddingLeft: 10,
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  dropdownText: {
    color: "white",
    fontSize: 16,
    marginLeft: 'auto',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#004168", 
  },
  modalView: {
    width: '80%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "flex-start",
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 20, // Aumentar el tamaño del padding
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row', // Permitir alineación horizontal
    alignItems: 'center', // Alinear verticalmente los íconos y el texto
  },
  menuItemText: {
    fontSize: 18, // Aumentar tamaño del texto
    color: COLORS.blue,
    textAlign: 'left',
    width: '100%',
    marginLeft: 10, // Espacio entre el ícono y el texto
  },
  icon: {
    width: 30, // Aumentar ancho del icono
    height: 30, // Aumentar alto del icono
  },
  closeText: {
    color: "red",
    marginTop: 10,
  },
});

export default VetList;
