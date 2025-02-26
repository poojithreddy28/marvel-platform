import React from 'react';

import { Grid, Typography, useMediaQuery } from '@mui/material';

import styles from './styles';

const UserAvatar = ({ fullName }) => {
  const isMobileScreen = useMediaQuery('(max-width:799px)');

  const getUserInitials = (name) => {
    if (!name) return '';
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('');
    return initials.toUpperCase();
  };

  return (
    <Grid {...styles.container}>
      <Grid {...styles.userAvatarCircleContainer}>
        <div style={{ ...styles.userAvatarCircle }}>
          <Typography style={{ color: '#fff' }}>
            {getUserInitials(fullName)}
          </Typography>
        </div>
      </Grid>
      <Grid {...styles.nameContainer}>
        {/* Display the user's name if the screen is not mobile size (at least 800 pixels wide). */}
        {!isMobileScreen && (
          <Typography {...styles.name}>{fullName}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default UserAvatar;
