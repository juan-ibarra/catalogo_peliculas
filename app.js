const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Inicializar app
const app = express();

// Configuración de method-override
app.use(methodOverride('_method'));

// Configuración de Handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares para parsear el body de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para el frontend
const frontendRoutes = require('./routes/frontendRoutes');
app.use('/', frontendRoutes);

// Rutas para la API
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
