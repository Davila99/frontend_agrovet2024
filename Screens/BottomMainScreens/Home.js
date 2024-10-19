import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Modal, TouchableOpacity } from "react-native";

const VetList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', paragraph: '' });

  const openModal = (title, paragraph) => {
    setModalContent({ title, paragraph });
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Menú Agrovets</Text>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={() => openModal('Inicio', 'Acceso a funciones principales: Consultas, Notificaciones, Profesionales cercanos.')}>
          <Image source={{ uri: "https://foodispower.org/wp-content/uploads/2024/04/435102729_440167355333747_7105797931512340262_n-e1714104412251-1024x497.jpg" }} style={styles.image} />
          <Text style={styles.title}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => openModal('Tips del Día', 'Asegúrate de mantener un calendario de vacunaciones para tu ganado para prevenir enfermedades.')}>
          <Image source={{ uri: "https://cdn.bmeditores.mx/2021/01/vacunacion-bovinos-696x348.jpg" }} style={styles.image} />
          <Text style={styles.title}>Tips del Día</Text>
        </TouchableOpacity>
      </View>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={() => openModal('Guías y Tutoriales', 'Salud Animal, Cultivos.')}>
          <Image source={{ uri: "https://hospitecnia.com/sites/default/files/styles/node_teaser/public/2023-05/cabecera-one-health-01.jpg?itok=MBwC_X44" }} style={styles.image} />
          <Text style={styles.title}>Guías y Tutoriales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => openModal('Artículos Relevantes', 'Los beneficios de la agricultura de conservación.')}>
          <Image source={{ uri: "https://www.syngenta.com.mx/sites/g/files/kgtney1381/files/styles/main_media_large/public/media/image/2017/12/15/14dic_mitos_700x400.jpg?itok=bKHrzVup" }} style={styles.image} />
          <Text style={styles.title}>Artículos Relevantes</Text>
        </TouchableOpacity>
      </View>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={() => openModal('Preguntas Frecuentes (FAQ)', 'Respuestas a las preguntas más comunes sobre la aplicación, el uso de recursos y el acceso a expertos.')}>
          <Image source={{ uri: "https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-vert.png" }} style={styles.image} />
          <Text style={styles.title}>Preguntas Frecuentes (FAQ)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => openModal('Foro de Comunidad', 'Comparte experiencias y recibe respuestas de otros usuarios y expertos.')}>
          <Image source={{ uri: "https://www.juangalera.com/wp-content/uploads/2017/03/comunidad-virtual-que-es.jpg" }} style={styles.image} />
          <Text style={styles.title}>Foro de Comunidad</Text>
        </TouchableOpacity>
      </View>

      {/* Agrupación de dos elementos */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={() => openModal('Suscripción a Funciones Premium', 'Información sobre características avanzadas disponibles mediante suscripción.')}>
          <Image source={{ uri: "https://img.freepik.com/fotos-premium/simbolo-finanzas-negocios-signo-dolar-verde_186380-3204.jpg" }} style={styles.image} />
          <Text style={styles.title}>Suscripción a Funciones Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => openModal('Notificaciones', 'Alertas sobre publicaciones relevantes, consejos importantes y actualizaciones de la aplicación.')}>
          <Image source={{ uri: "https://molinoschampion.com/wp-content/uploads/2021/08/Crianza-de-Vaquillas-Ternera-crecimiento-1-1170x658.jpg" }} style={styles.image} />
          <Text style={styles.title}>Notificaciones</Text>
        </TouchableOpacity>
      </View>

      {/* Último elemento sin par */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={() => openModal('Contáctanos', 'Información de contacto para soporte técnico o consultas sobre la aplicación.')}>
          <Image source={{ uri: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/450846346_1654253561993956_5392783358307727618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2R90LnugY8sQ7kNvgF8ISew&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AJ8XrFYSuu2i3EsieT9SQNP&oh=00_AYDOZ_DbV87PiuzunCJmBuAs8wm3JQrAPqDzkX3uxvrBCQ&oe=6718F2AF" }} style={styles.image} />
          <Text style={styles.title}>Contáctanos</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para mostrar información adicional */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalContent.title}</Text>
            <Text style={styles.modalParagraph}>{modalContent.paragraph}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para el modal
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalParagraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#0070f3',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VetList;
