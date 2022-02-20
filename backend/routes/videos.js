const router = require('express').Router();

const Video = require('../models/video');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const page = req.query.page ? req.query.page : 0;
  const page_size = req.query.page_size ? req.query.page_size : 5;
  const videos = await Video.find({}).sort('-publishedAt').skip(page*page_size).limit(page_size);

  res.json(await videos.map(v => v.toJSON()));
});

module.exports = router;
