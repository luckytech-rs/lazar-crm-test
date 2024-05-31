# lazar-crm-test

This is test application containing two apps:
- BE crm-backend app consisting of node js application with express. Database used is postgress, there are endpoints needed for FE app to use. Environment and database is dockerized so all you need to run is a docker command after entering crm-backend directory

```cd crm-backend```

```docker-compose up --build -d```


- FE crm-frontend app is a react web app using typescript. for the state menagment redux is used. For the UI library, since its a dashboard, I am using ant-d library, axios is used for fetching data from backend. Enviromnent is dockerized as well, so runinng a command after entering the frontend folder will set all up in docker:


```cd crm-frontend```

```docker-compose up --build -d```

after all that done application is ready for use:

BE is ronning on localhost:3000

DB is running on localhost:5432

FE is running on localhost:3001
