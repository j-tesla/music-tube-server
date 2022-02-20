
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;


const { MONGODB_URI, YOUTUBE_API_KEY } = process.env;


module.exports = {
  YOUTUBE_API_KEY,
  MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
}
