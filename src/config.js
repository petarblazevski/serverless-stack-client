export default {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-api"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://67a5xmckwg.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_WJ9h0DQMj",
    APP_CLIENT_ID: "3i39l5klflq0lalp419c19alj3",
    IDENTITY_POOL_ID: "eu-central-1:4d89c05c-799f-419a-950f-58d0bc49c75e"
  }
};
