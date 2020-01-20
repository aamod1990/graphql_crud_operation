const { createApolloFetch } = require('apollo-fetch');
const accessToken = 'your_access_token_from_github';
const apolloFetch = createApolloFetch({
  uri: 'http://localhost:9080/graphql',
});
const query = `query Details(
    $userId:String!,
  ){
    getUserDetails(id: $userId){
      __typename
      ...userdetails
    }
  }
  fragment userdetails on User{
    id
    fName
    lName
  }
`
const variable = {
    "userId": "1001"
};

// You can also easily pass variables for dynamic arguments
apolloFetch(
    { 
        query:query,
        variables:variable,
        context:{"name":"aasdasdadasd"}

    })
.then( result => {
  // GraphQL data, GraphQL errors and GraphQL extensions
  //console.log("resultresultresult",result);
  const { data, error, extensions } = result;
  console.log("data",data, "error",error, "extensions",extensions);
})
.catch(error => {
  //respond to a network error
})