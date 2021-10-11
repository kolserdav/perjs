/****************************************************************
 * Repository https://github.com/kolserdav/perjs.git
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Mon Oct 11 2021 15:52:52 GMT+0700 (Krasnoyarsk Standard Time)
****************************************************************/
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
