import express from 'express';
import cors from 'cors';
import * as api from './api';
import * as middleware from './middleware';

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json({ limit: '5mb' }));
app.use(middleware.getLang);
app.post('/api/v1/user/findfirst', api.user.findFirst.middleware, api.user.findFirst.handler);

app.listen(3030);
