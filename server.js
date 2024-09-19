import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import authRoutes from './routes/authRoutes.js';
import documentRoutes from './routes/documentRoutes.js';
import path from 'path';

dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/documents', documentRoutes);
app.use('/uploads', express.static('uploads'));

// ----------------------------Deployment--------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "./frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "./frontend/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Welcome to Document App</h1>");
  });
}



// ----------------------------Deployment--------------------------------



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.white);
});



