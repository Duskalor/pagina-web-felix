import llama from '../assets/fotos/llama.jpg';
import machupichu from '../assets/fotos/machupichu.jpg';
import machu from '../assets/fotos/machu.jpg';

export const fotos_machupichu = [
  {
    id: 1,
    nombre: 'Machu Picchu',
    descripcion:
      'Machu Picchu, una de las maravillas del mundo, combina historia y naturaleza. Este sitio arqueológico, ubicado en Perú, es famoso por su impresionante arquitectura inca y sus vistas panorámicas a los Andes. Ideal para los amantes de la aventura y la cultura.',
    precio: 150,
    imagen: machu, // Asegúrate de tener esta variable definida con la ruta o import correspondiente.
  },
  {
    id: 2,
    nombre: 'Machu Picchu en la niebla',
    descripcion:
      'Explora el encanto místico de Machu Picchu envuelto en niebla matutina. Esta experiencia única ofrece una conexión mágica con la historia y la belleza natural de los Andes peruanos.',
    precio: 200,
    imagen: machupichu,
  },
  {
    id: 3,
    nombre: 'Machu Picchu y la llama',
    descripcion:
      'Disfruta de la vista icónica de una llama pastando en las ruinas de Machu Picchu. Esta combinación de vida salvaje y arquitectura inca crea una escena inolvidable.',
    precio: 180,
    imagen: llama, // Asegúrate de que la variable llama esté definida correctamente.
  },
];

export const links = [
  {
    id: 1,
    nombre: 'Inicio',
    href: '/',
  },
  {
    id: 2,
    nombre: 'Tours',
    href: '/tours',
  },
  {
    id: 3,
    nombre: 'Sobre mí',
    href: '/sobre-mi',
  },
  // {
  //   id: 4,
  //   nombre: 'Contáctanos',
  //   href: '/contactanos',
  // },
  {
    id: 5,
    nombre: 'Blog',
    href: '/blog',
  },
];

export const tourFeatureOptions = [
  'Capture Every Moment',
  'Share Your Adventure Instantly',
  'Relive Your Journey with Highlight Reels',
  'Access Travel Info On-the-Go',
  'Multilingual Support & Accessibility Options',
  'Your Comfort & Privacy Ensured',
  'Immerse Yourself in Local Culture',
  'Expert Guides & Local Insights',
];

export const numero_contacto = '+51986154999';
export const mensaje_contacto =
  'Hola, quiero contactarte para que seas mi guia, en mi estadia en Cusco';
