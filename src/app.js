import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createRoles } from "./libs/initialSetup";
import indexRoutes from './routes/index.routes';
import authRoutes from './routes/auth.routes';

const app = express();
createRoles();

// middlewares
app.use(express.json({type: "*/*"}));
app.use(morgan('dev'));
app.use(cors());

// use routes
app.use(indexRoutes);
app.use('/api/auth', authRoutes);

export default app;