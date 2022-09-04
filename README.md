git init .
yarn init -y
yarn add -D typescript @types/node ts-node nodemon sucrase prettier

yarn add adminjs @adminjs/express express @types/express express-formidable express-session
yarn add tslib dotenv
yarn add pg pg-hstore sequelize 
yarn add -D sequelize-cli


# para criar migrations
yarn sequelize-cli init


# para criar os models
yarn sequelize-cli model:generate --name users --attributes \
    id: string \
    name: string \
    email: string \
    password_hash: string \
    role: string \
    status: string

yarn sequelize-cli model:generate --name projects --atributes \
    id: string \
    name: string \
    description: string \
    status: string \
    user_id: string


yarn sequelize-cli mode:generate --name tasks --attributes \
    id: string \
    due_date: date \
    effort: integer \
    title: string \
    description: string \
    order: integer \
    status: string \
    path: string \
    folder: string \
    type: string \
    filename: string \
    size: string \
    user_id: string \
    project_id: string




