import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos)

    if (!exerciseVideos.length) return <Loader />;
  return (
    <Box
      sx={{ marginTop: { lg: "200px", xs: "20px" } }}
      p="20px"
    >
      <Typography variant="h3" mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' display='flex' flexWrap='wrap' alignItems='center' sx={{
        flexDirection: {lg: 'row'},
        gap: {lg: '10px', xs: '0'}
      }}>
        {
          exerciseVideos?.slice(0, 5).map((item, index) => (
            <a 
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer">
              <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
              <Box>
        <Typography sx={{ fontSize: { lg: '15px', xs: '12px' } }} fontWeight={600} color="#000" variant="h5">
          {item.video.title}
        </Typography>
        <Typography color="#000">
          {item.video.channelName}
        </Typography>
      </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
