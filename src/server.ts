import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { mySchema, myResolvers } from './graphql'; 

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: mySchema, 
    rootValue: myResolvers, 
    graphiql: true, 
  })
);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
