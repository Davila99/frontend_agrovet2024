import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import COLORS from "../../Constants/Colors";
import fonts from "../../config/fonts";
import { getChats } from "../../api";
import {Manager} from 'socket.io-client'

const VetList = () => {

  useEffect(() => {
    const ws= new Manager('http://192.168.4.40:3000/socket.io/socket.io.js')

    const socket=ws.socket('/')
    
    //const ws = new WebSocket("http://192.168.42.250:3000/");
    ws.onopen = () => {
      console.log("Conexión establecida");
    };

    ws.onmessage = (e) => {
      console.log("Mensaje recibido:", e.data);
      // Manejar el mensaje recibido, por ejemplo, actualizar el estado de tu aplicación
    };

    ws.onerror = (error) => {
      console.log("Error en la conexión:", error);
    };

    ws.onclose = () => {
      console.log("Conexión cerrada");
    };

    // Retorno de efecto para limpiar al desmontar el componente
    return () => {
      ws.close();
    };
  }, []);

  

  return (
    <View
      style={{
        fontWeight: "bold",
        backgroundColor: COLORS.blue,
        paddingBottom: 40,
        paddingTop: 1,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.blue,
          height: 70,
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            justifyContent: "flex-start",
            marginBotton: 30,
          }}
        >
          <Text
            style={{
              paddingLeft: 10,
              fontWeight: "bold",
              color: "white",
              fontSize: 25,
              marginLeft: 10,
              width: "100",
              margin: 10,
              textAlign: "left",
            }}
          >
            Welcome
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "40%",
            paddingBottom: 20,
            paddingHorizontal: 2,
          }}
        >
          <TouchableOpacity style={{ paddingHorizontal: 16 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 16 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Vets.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 16 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Anuncios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 16 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Notific.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 16 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Config.</Text>
          </TouchableOpacity>
        </View>
      </View>
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
