require('dotenv').config();
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
