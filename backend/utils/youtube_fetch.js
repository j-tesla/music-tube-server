const {google} = require('googleapis');
const {ToadScheduler, SimpleIntervalJob, AsyncTask} = require('toad-scheduler')

const Video = require('../models/video');
const {YOUTUBE_API_KEY} = require('../utils/config');

const MUSIC_TOPIDID = '/m/04rlf';

const youtube = google.youtube({
  version: 'v3',
  auth: YOUTUBE_API_KEY,
});

const reqParams = {
  part: 'snippet', order: 'date', type: 'video', topicId: MUSIC_TOPIDID, videoEmbeddable: true,
};

const processItems = (items) => {
  items.forEach(async (item) => {
    try {
      await Video.findByIdAndDelete(item.id.videoId);
    } catch (e) {
    }

    const video = new Video({
      _id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: Date(item.snippet.publishedAt),
    });

    await video.save();
  });
};

const update_db = async () => {
  try {

    let {data} = await youtube.search.list(reqParams);

    let itemsToGet = data.pageInfo.totalResults;
    itemsToGet -= data.pageInfo.resultsPerPage;

    processItems(data.items);
    while (itemsToGet > 0) {
      const {nextPageToken} = data;
      if (nextPageToken === undefined || nextPageToken === null) break;
      // eslint-disable-next-line no-await-in-loop
      const res = await youtube.search.list({pageToken: nextPageToken, ...reqParams});
      data = res.data;
      itemsToGet -= data.pageInfo.resultsPerPage

      processItems(data.items);
    }
  } catch (e) {
  }
  console.log('--updated db--')

};

const scheduler = new ToadScheduler()
const schedule_update_db = () => {

  const task = new AsyncTask('update-db', update_db);
  const job = new SimpleIntervalJob({ hours: 12, runImmediately: true }, task)
  scheduler.addSimpleIntervalJob(job);
}

module.exports = {update_db, schedule_update_db};
