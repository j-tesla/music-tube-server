import React from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function Pagination({
  page, displayPrev, displayNext, setPage,
}) {
  const decrementPage = () => { setPage((p) => p - 1); };
  const incrementPage = () => { setPage((p) => p + 1); };

  return (
    <Stack direction="row" flex justifyContent="space-evenly" alignItems="center" sx={{ my: 5, mx: '30%', height: '50px' }}>

      <IconButton aria-label="prev-page" onClick={decrementPage} disabled={!displayPrev}>
        <ChevronLeft />
      </IconButton>

      <Typography>
        Page:
        {' '}
        {page + 1}
      </Typography>

      <IconButton aria-label="next-page" onClick={incrementPage} disabled={!displayNext}>
        <ChevronRight />
      </IconButton>

    </Stack>
  );
}

export default Pagination;
