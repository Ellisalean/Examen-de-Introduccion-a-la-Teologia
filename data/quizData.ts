
import { Question, QuestionType } from '../types';

export const quizQuestions: Question[] = [
  // Lesson 1: Sustento Teológico
  { id: 1, type: QuestionType.MULTIPLE_CHOICE, questionText: 'Según la Lección 1, ¿qué dos términos latinos combinados ofrecen una comprensión integral de la educación?', points: 10, imageUrl: 'https://definicion.com/wp-content/uploads/2022/01/brain-g7da7e1016_1920-1024x780.jpg', options: [{ text: 'Educare y Exducere', isCorrect: true }, { text: 'Pedagogía y Andragogía', isCorrect: false }, { text: 'Instrucción y Doctrina', isCorrect: false }, { text: 'Formación y Disciplina', isCorrect: false }] },
  { id: 2, type: QuestionType.TRUE_FALSE, questionText: '¿El texto de Efesios 4:13 provee tres elementos sobre el proceso formativo del pueblo de Dios: naturaleza, finalidad y estándar?', points: 10, imageUrl: 'https://www.ecoavant.com/uploads/s1/28/20/68/imagen-de-que-es-la-naturaleza.webp', correctBoolean: true },
  
  // Lesson 2: Unidad
  { id: 3, type: QuestionType.MULTIPLE_CHOICE, questionText: 'En relación a la unidad teológica, ¿cuál es el llamado del pueblo de Dios?', points: 10, imageUrl: 'https://s1.significados.com/foto/pueblo-og.jpg', options: [{ text: 'Crear la unidad', isCorrect: false }, { text: 'Procurar la unidad', isCorrect: true }, { text: 'Imponer la unidad', isCorrect: false }, { text: 'Ignorar la unidad', isCorrect: false }] },
  
  // Lesson 3: Excelencia
  { id: 5, type: QuestionType.MULTIPLE_CHOICE, questionText: '¿Cuáles son los tres agentes primarios que determinan los estándares de excelencia según la Lección 3?', points: 10, imageUrl: 'https://www.harvard-deusto.com/sites/default/files/styles/article_front/public/2024-01/foto-haciendo-realidad-cultura-excelencia.jpg?itok=C8isnV30', options: [{ text: 'Padres, Maestros, Alumnos', isCorrect: false }, { text: 'Dios, la Iglesia, la Institución', isCorrect: true }, { text: 'Gobierno, Sociedad, Familia', isCorrect: false }, { text: 'Libros, Programas, Exámenes', isCorrect: false }] },
  { id: 6, type: QuestionType.TRUE_FALSE, questionText: '¿Es la "mente cristocéntrica" definida por las "tres P": plan, propósito y perspectiva?', points: 10, imageUrl: 'https://www.revistaabogacia.com/wp-content/uploads/2024/06/etica-judicial-1068x601.webp', correctBoolean: true },
  
  // Lesson 4: Estudiante
  { id: 7, type: QuestionType.MULTIPLE_CHOICE, questionText: '¿Cuáles son las tres dimensiones éticas que debe cumplir el estudiante de teología?', points: 10, imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80', options: [{ text: 'Dogmática, Práctica, Pactal', isCorrect: true }, { text: 'Teórica, Técnica, Moral', isCorrect: false }, { text: 'Académica, Social, Individual', isCorrect: false }, { text: 'Intelectual, Emocional, Física', isCorrect: false }] },
  
  // Lesson 5: Docente
  { id: 8, type: QuestionType.TRUE_FALSE, questionText: '¿Según I Timoteo 4:16, el "cuidado" del docente debe enfocarse solo en su enseñanza y no en su vida personal?', points: 10, imageUrl: 'https://iveconsultores.com/wp-content/uploads/2020/08/imagen-principal-enfoque-basado-en-procesos.jpg', correctBoolean: false },
  { id: 9, type: QuestionType.MULTIPLE_CHOICE, questionText: '¿En qué dos sentidos debe entenderse la docencia según la Lección 5?', points: 10, imageUrl: 'https://www.tuterapia.com.uy/uploads/blog/imagen/elsentidodelavidaculesycmoencontrarlo-20201215155306.jpg', options: [{ text: 'Como oficio y como pasatiempo', isCorrect: false }, { text: 'Como ministerio y como profesión', isCorrect: true }, { text: 'Como ciencia y como arte', isCorrect: false }, { text: 'Como vocación y como cargo', isCorrect: false }] },
  
  // Lesson 6: Programa
  { id: 10, type: QuestionType.MULTIPLE_CHOICE, questionText: '¿Cuáles son las "Tres C" del programa educativo según la Lección 6?', points: 10, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/C--_logo.svg/1280px-C--_logo.svg.png', options: [{ text: 'Calidad, Creatividad, Conciencia', isCorrect: false }, { text: 'Cumplimiento, Confianza, Colectividad', isCorrect: true }, { text: 'Contenido, Contexto, Competencia', isCorrect: false }, { text: 'Ciencia, Carácter, Conducta', isCorrect: false }] },
  
  // Lesson 7: Fin
  { id: 11, type: QuestionType.TRUE_FALSE, questionText: '¿El fin de la educación teológica es "perfeccionar" (katartismon), lo cual significa acabar enteramente una obra, dándole el mayor grado posible de excelencia?', points: 10, imageUrl: 'https://media.thegospelcoalition.org/wp-content/uploads/sites/4/2022/06/29171612/formacion-teologica.jpg', correctBoolean: true }
];

