const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  YOUTUBE_API_KEY,
} = process.env;


const {DB_URI =  `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`} = process.env;

module.exports = {
  YOUTUBE_API_KEY,
  MONGODB_URI: DB_URI,
};

