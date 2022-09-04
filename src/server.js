import AdminJs from 'adminjs';
import express from 'express';

import AdminJsExpress from '@adminjs/express';

const app = express();

const adminJS = new AdminJs({
    databases:  [],
    rootPath: '/admin',
    resources: []
});

const router = AdminJsExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.listen(5000, () => {
    console.log('AdminJS is under https://localhost:5000/admin');
});




