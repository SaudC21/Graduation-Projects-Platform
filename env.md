# Environment Variables

## Back-end
Make sure to create a file at the root of the project called `.env` and provide the following environment variables:
```
PEPPER="developedbyfaisalsaudandabdulrahmanbatch19it"
SALT_ROUNDS=5
TOKEN_SECRET="developedbyabdulrahmansaudandfaisalbatch19it"
MONGODB_URI="mongodb+srv://admin:tiger@clustergpp.gaprr3p.mongodb.net/graduation_projects_platform"
PORT=4000
```

## Front-end
- Make sure to create a folder in the `src` folder called `environments`
- Make sure to create a `environment.ts` file in the folder
Provide the following environment variables for it:

```
export const environment = {
  PORT: 4000,
  BACKEND_URL: http://localhost:,
};
```