import React from 'react';

const Home = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#e6f7ff', // Un fondo suave
      borderRadius: '8px',
      maxWidth: '600px',
      margin: 'auto',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    item: {
      marginBottom: '15px',
      padding: '10px',
      backgroundColor: '#ffffff', // Fondo blanco para los elementos
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex', // Para alinear imagen y texto
      alignItems: 'center',
      padding: '15px',
    },
    title: {
      margin: '0',
      fontSize: '1.5rem',
      color: '#0070f3', // Un azul vibrante
    },
    paragraph: {
      margin: '5px 0',
      color: '#333',
    },
    image: {
      width: '50px', // Tamaño de la imagen
      height: '50px',
      marginRight: '15px', // Espacio entre imagen y texto
    },
    list: {
      listStyleType: 'none', // Quitar puntos de la lista
      padding: '0', // Sin padding
    },
    listItem: {
      margin: '5px 0',
      padding: '10px',
      backgroundColor: '#f0f0f0', // Fondo gris suave para los elementos de la lista
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Menú Agrovets</h1>
      
      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Inicio" style={styles.image} />
        <div>
          <h2 style={styles.title}>Inicio</h2>
          <p style={styles.paragraph}>Acceso a funciones principales: Consultas, Notificaciones, Profesionales cercanos.</p>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Tips del Día" style={styles.image} />
        <div>
          <h2 style={styles.title}>Tips del Día</h2>
          <p style={styles.paragraph}>Asegúrate de mantener un calendario de vacunaciones para tu ganado para prevenir enfermedades.</p>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Guías y Tutoriales" style={styles.image} />
        <div>
          <h2 style={styles.title}>Guías y Tutoriales</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Salud Animal</li>
            <li style={styles.listItem}>Cultivos</li>
          </ul>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Artículos Relevantes" style={styles.image} />
        <div>
          <h2 style={styles.title}>Artículos Relevantes</h2>
          <p style={styles.paragraph}>Los beneficios de la agricultura de conservación.</p>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Preguntas Frecuentes" style={styles.image} />
        <div>
          <h2 style={styles.title}>Preguntas Frecuentes (FAQ)</h2>
          <p style={styles.paragraph}>Respuestas a las preguntas más comunes sobre la aplicación, el uso de recursos y el acceso a expertos.</p>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Foro de Comunidad" style={styles.image} />
        <div>
          <h2 style={styles.title}>Foro de Comunidad</h2>
          <p style={styles.paragraph}>Comparte experiencias y recibe respuestas de otros usuarios y expertos.</p>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Suscripción" style={styles.image} />
        <div>
          <h2 style={styles.title}>Suscripción a Funciones Premium</h2>
          <p style={styles.paragraph}>Información sobre características avanzadas disponibles mediante suscripción.</p>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Notificaciones" style={styles.image} />
        <div>
          <h2 style={styles.title}>Notificaciones</h2>
          <p style={styles.paragraph}>Alertas sobre publicaciones relevantes, consejos importantes y actualizaciones de la aplicación.</p>
        </div>
      </div>

      <div style={styles.item}>
        <img src="https://via.placeholder.com/50" alt="Contáctanos" style={styles.image} />
        <div>
          <h2 style={styles.title}>Contáctanos</h2>
          <p style={styles.paragraph}>Información de contacto para soporte técnico o consultas sobre la aplicación.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
