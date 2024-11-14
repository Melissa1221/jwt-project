import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Escuchar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
