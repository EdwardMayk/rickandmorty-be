# Rick and Morty GraphQL API

This project is a GraphQL API that provides information about characters from the popular TV series "Rick and Morty." The API uses the Rick and Morty API (https://rickandmortyapi.com/) as a data source to retrieve information about the characters.

## Technologies Used

- Node.js
- Typescript
- Express
- GraphQL
- Apollo Server
- Axios
- Jest

## Project Setup

To set up and run this project on your local environment, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/EdwardMayk/rickandmorty-be
```
2. Navigate to the project directory:
```bash
cd rickandmorty-be
```
3.Install project dependencies:
```bash
npm install
```
Start the server:
```bash
npm start
```

The GraphQL server will be running at http://localhost:3000/graphql. You can open this URL in your browser or use a tool like GraphQL Playground to interact with the API.

##Using The API
You can make GraphQL queries to the API to retrieve information about Rick and Morty characters. Here's an example query:
```bash
query{
  characters(page: 1, pageSize: 10) {
    id
    name
    species
    type
    gender
    image
    created
  }
}
```
This query will return a list of 10 characters on page 1, including their IDs, names, and species.

## Running Tests
To run tests for this project, follow these steps:

Run the tests using Jest:
```bash
npm test
```




