import React from 'react';
import {
  Card, CardContent, CardHeader, CardMedia, Typography,
} from '@mui/material';
import YouTube from 'react-youtube';

// import YouTube from 'react-youtube';

function VideoCardHeader({ video }) {
  return (
    <CardHeader title={video.title} sx={{ py: '2.5%' }} />
  );
}

function VideoCardMedia({ video }) {
  return (
    <CardMedia>
      <YouTube
        videoId={video.id}
        id={video.id}
        title={video.title}
        className=".MuiCardMedia-media"
        containerClassName="video-container"
      />
    </CardMedia>
  );
}

function VideoCardContent({ video }) {
  return (
    <CardContent>
      <Typography variant="body1">
        {video.description}
      </Typography>
    </CardContent>
  );
}

function VideoCard({ video }) {
  return (
    <Card variant="outlined" sx={{ px: '5%' }}>
      <VideoCardHeader video={video} />
      <VideoCardMedia video={video} />
      <VideoCardContent video={video} />
    </Card>
  );
}

export default VideoCard;
