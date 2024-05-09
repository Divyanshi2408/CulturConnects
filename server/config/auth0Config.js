import { config } from 'dotenv';
import { auth } from 'express-oauth2-jwt-bearer';

// Load environment variables from .env file
config();

// Use environment variables in your code
const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    tokenSigningAlg: process.env.TOKEN_SIGNING_ALG
});

export default jwtCheck;
