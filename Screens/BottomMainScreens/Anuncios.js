import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

// Datos de ejemplo (puedes obtenerlos de una API o base de datos)
const noticias = [
  {
    id: '1',
    titulo: "Nuevas técnicas de riego para mejorar la productividad agrícola",
    descripcion: "El uso del riego por goteo aumenta la eficiencia del uso de agua en cultivos.",
    imagen: "https://yamuni.com.mx/wp-content/uploads/2024/06/regadio-por-aspercion-1024x576.jpeg", // Reemplaza con URL reales
  },
  {
    id: '2',
    titulo: "Mejoras en el manejo de ganado para reducir enfermedades",
    descripcion: "Nuevas prácticas alimenticias y de higiene están reduciendo las enfermedades en el ganado.",
    imagen: "https://www.blog.consentidovacuno.es/posts/easset_upload_file44116_863733_e.jpg", // Reemplaza con URL reales
  },
  {
    id: '3',
    titulo: "Uso de fertilizantes orgánicos en cultivos de maíz",
    descripcion: "Los fertilizantes orgánicos están demostrando ser eficaces en la mejora del rendimiento agrícola.",
    imagen: "https://blog.cambiagro.com/wp-content/uploads/2024/05/header-fertilizantes-para-maiz.jpg", // Reemplaza con URL reales
  },
];

const Anuncios = () => {
  const renderNoticia = ({ item }) => (
    <View style={styles.noticiaContainer}>
      <Image source={{ uri: item.imagen }} style={styles.imagenNoticia} />
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descripcion}>{item.descripcion}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Últimas Noticias de Agronomía y Pecuaria</Text>
      <FlatList
        data={noticias}
        renderItem={renderNoticia}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#1e90ff",  // Color estilo ESPN
    marginBottom: 20,
  },
  noticiaContainer: {
    flexDirection: "row",
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imagenNoticia: {
    width: 120,
    height: 120,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    color: "#666",
  },
});

export default Anuncios;
