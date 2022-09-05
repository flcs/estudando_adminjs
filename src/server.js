import "dotenv/config";

import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

// import User from './models/user';
import UsersResrource from './resources/UsersResource';

import locale from './locales'


AdminJS.registerAdapter(AdminJSSequelize);


const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UsersResrource],
    locale: {
        translations: {
            actions: {
                new: "Criar Novo"
            },
            labels: {
                users: "Usuários"
            },
            resources: {
                users: {
                    actions: {
                        resetPassword: "Redefinir Senha"
                    },
                    properties: {
                        name: "Nome",
                        initials: "Iniciais",
                        status: "Estado",
                        createdAt: "Criado em",
                        updatedAt: "Atualizado em",
                    }
                }
            }
        }
    }
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.listen(5000, () => {
    console.log('AdminJS is under https://localhost:5000/admin');
});




