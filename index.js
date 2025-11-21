import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());



//Middleware for handling 404 errors:
app.use((req, res, next) => {
  res.status(404).json({ message: `Resource not found at req: ${req}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
