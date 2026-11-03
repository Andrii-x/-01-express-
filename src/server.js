import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import pinoHttp from 'pino-http';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(pinoHttp());
app.use(cors());
app.use(express.json());

app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/:noteId', (req, res) => {
  res.status(200).json({
    message: `Retrieved note with ID: ${req.params.noteId}`,
  });
});

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});