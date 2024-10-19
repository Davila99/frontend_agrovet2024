import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const VetList = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Menú Agrovets</Text>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Inicio</Text>
            <Text style={styles.paragraph}>Acceso a funciones principales: Consultas, Notificaciones, Profesionales cercanos.</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Tips del Día</Text>
            <Text style={styles.paragraph}>Asegúrate de mantener un calendario de vacunaciones para tu ganado para prevenir enfermedades.</Text>
          </View>
        </View>
      </View>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Guías y Tutoriales</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>Salud Animal</Text>
              <Text style={styles.listItem}>Cultivos</Text>
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Artículos Relevantes</Text>
            <Text style={styles.paragraph}>Los beneficios de la agricultura de conservación.</Text>
          </View>
        </View>
      </View>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Preguntas Frecuentes (FAQ)</Text>
            <Text style={styles.paragraph}>Respuestas a las preguntas más comunes sobre la aplicación, el uso de recursos y el acceso a expertos.</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Foro de Comunidad</Text>
            <Text style={styles.paragraph}>Comparte experiencias y recibe respuestas de otros usuarios y expertos.</Text>
          </View>
        </View>
      </View>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Suscripción a Funciones Premium</Text>
            <Text style={styles.paragraph}>Información sobre características avanzadas disponibles mediante suscripción.</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Notificaciones</Text>
            <Text style={styles.paragraph}>Alertas sobre publicaciones relevantes, consejos importantes y actualizaciones de la aplicación.</Text>
          </View>
        </View>
      </View>

      {/* Último elemento sin par */}
      <View style={styles.row}>
        <View style={styles.item}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
          <View>
            <Text style={styles.title}>Contáctanos</Text>
            <Text style={styles.paragraph}>Información de contacto para soporte técnico o consultas sobre la aplicación.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f7ff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0070f3',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espacio entre los elementos
    marginBottom: 15,
  },
  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    marginRight: 10, // Espacio entre los dos elementos
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0070f3',
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  list: {
    marginTop: 5,
  },
  listItem: {
    fontSize: 14,
    color: '#555',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default VetList;
