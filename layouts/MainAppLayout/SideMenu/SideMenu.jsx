import { LogoutOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

import KAIAvatar from '@/assets/svg/KAIAvatar.svg';

import UserAvatar from '../../../components/UserAvatar';
import NavMenu from '../NavMenu';

import styles from './styles';

import ROUTES from '@/libs/constants/routes';

import { auth } from '@/libs/redux/store';

/**
 * Renders the Side Menu.
 *
 * @return {ReactNode} The rendered Side Menu.
 */
const SideMenu = ({ user }) => {
  const router = useRouter();

  const isMobileScreen = useMediaQuery('(max-width:799px)');

  const handleSignOutUser = () => {
    signOut(auth);
  };

  const renderLogo = () => {
    return (
      <Grid onClick={() => router.push(ROUTES.HOME)} {...styles.logoGridProps}>
        <Grid {...styles.logoImageGridProps}>
          <KAIAvatar />
        </Grid>
        <Grid {...styles.titleGridProps}>
          {/* Display the logo text if the screen is not mobile size (at least 800 pixels wide). */}
          {!isMobileScreen && (
            <Typography {...styles.subtitleProps}>
              AI Teaching Assistant
            </Typography>
          )}
        </Grid>
      </Grid>
    );
  };

  const renderProfileImage = () => {
    return <UserAvatar fullName={user?.fullName} />;
  };

  const renderLogout = () => {
    return (
      <Grid {...styles.logoutGridProps}>
        <Button
          onClick={handleSignOutUser}
          endIcon={<LogoutOutlined {...styles.logOutOutlineProps} />}
          {...styles.logoutButtonProps}
        />
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderLogo()}
      <NavMenu />
      {renderProfileImage()}
      {renderLogout()}
    </Grid>
  );
};

export default SideMenu;
