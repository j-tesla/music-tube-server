import React, {
  useEffect,
  useState,
} from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {
  AppBar, Container, Stack, Toolbar, Typography,
} from '@mui/material';
import { getPage } from './services/videos';
import VideoCard from './components/VideoCard';
import Pagination from './components/Pagination';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(0);
  const [videos, setVidoes] = useState([]);
  const [displayNext, setDisplayNext] = useState(true);

  useEffect(() => {
    getPage(page).then((result) => {
      setVidoes(result);
    });
    getPage(page + 1).then((result) => {
      setDisplayNext(result.length > 0);
    });
  }, [page]);

  // eslint-disable-next-line no-console
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mx: '5%' }}>Music Tube</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Stack spacing={{ md: 2, lg: 3 }} sx={{ mx: '10%', my: 5 }}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Stack>
        <Pagination
          page={page}
          setPage={setPage}
          displayPrev={page > 0}
          displayNext={displayNext}
        />
      </Container>
    </>
  );
}

export default App;
