git init .
yarn init -y
yarn add -D typescript @types/node ts-node nodemon sucrase prettier

yarn add adminjs @adminjs/express @adminjs/sequelize express \
    @types/express express-formidable express-session sequelize \
    @types/sequelize
    
yarn add tslib dotenv
yarn add pg pg-hstore
yarn add -D sequelize-cli


# para criar migrations
yarn sequelize-cli init

# para criar os models
yarn sequelize-cli model:generate --name users --attributes \
    name:string,email:string,password_hash:string,role:string,status:string

yarn sequelize-cli model:generate --name projects --atributes \
    name:string,description:string,status:string,user_id:string

yarn sequelize-cli mode:generate --name tasks --attributes \
    due_date:date,effort:integer,title:string,description:string,order:integer,status:string,path:string,folder:string,type:string,filename:string,size:string,user_id:string,project_id:string

# executar o migrate
yarn sequelize-cli db:migrate


# criar uma migration
yarn sequelize-cli migration:generate --name add-upload-to-task 


history:

# descer imagens
docker pull postgres
docker pull dpage/pgadmin4

# ver imagens disponíveis
docker images 

# criar rede entre postgres e pgmyadmin
docker network create --driver bridge postgres-network
docker network ls

# criar o servidor postgres (erradamente, exemplo)
docker run --name teste-postgres --network=postgres-network -e "POSTGRES_PASSWORD=Postgres2018!" -p 5432:5432 -v /home/renatogroffe/Desenvolvimento/PostgreSQL:/var/lib/postgresql/data -d postgres

# listar servidores rodando
docker ps

# parar servidor
docker stop teste-postgres

# eliminar servidor
docker rm teste-postgres

# criar servidor postgres (correto)
docker run --name meu-postgres --network=postgres-network -e "POSTGRES_PASSWORD=secret" -p 5432:5432 -v /home/fernando/PostgreSQL:/var/lib/postgresql/data -d postgres
# criar servidor pgadmin
docker run --name meu-pgadmin --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=fernando.carvalho.iff@gmail.com" -e "PGADMIN_DEFAULT_PASSWORD=secret" -d dpage/pgadmin4

docker ps

docker container ls -a

docker start meu-postgres
docker stop meu-postgres
docker start meu-pgadmin
docker stop meu-pgadmin

# acessar via prompt
psql admin -h localhost -U postgres

# executar o migrate
yarn sequelize-cli db:migrate

