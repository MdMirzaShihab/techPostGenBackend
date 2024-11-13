require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3000;
const MongodbURL = process.env.MONGODB_ATLAS_URL;
const OpenAIKey = process.env.OPENAI_API_KEY;
const GeminiAPIKey = process.env.GEMINI_API_KEY;
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || 'BACKUP_JWT_ACTIVATION_KEY';

module.exports = { serverPort, MongodbURL, OpenAIKey, GeminiAPIKey, jwtActivationKey };
