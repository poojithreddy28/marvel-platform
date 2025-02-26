const styles = {
  mainGridProps: (isMyMessage) => ({
    container: true,
    item: true,
    mobileSmall: 12,
    alignItems: 'center',
    justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
    mt: 3,
  }),
  messageProps: () => ({
    sx: {
      width: '100%',
      textWrap: 'wrap',
      wordWrap: 'break-word',
      fontFamily: 'Satoshi Medium',
      fontWeight: '300',
      fontSize: { laptop: '16px', desktop: '18px', desktopMedium: '20px' },
      lineHeight: { desktop: '24px', desktopMedium: '28px' },
      letterSpacing: '0.02em',
      color: (theme) => theme.palette.Common.White['100p'],
      ol: {
        ml: 4,
      },
      ul: {
        ml: 4,
      },
      pre: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        div: {
          code: { whiteSpace: 'pre-wrap !important' },
          overflow: 'auto',
        },
      },
      code: { whiteSpace: 'pre-wrap !important', overflow: 'auto' },
      'p:not(:last-child)': {
        marginBottom: '16px',
      },
      'ul:not(:last-child)': {
        marginBottom: '16px',
      },
      li: {
        marginBottom: '16px',
        p: { marginBottom: '0px !important' },
      },
    },
  }),
  aiNameProps: {
    sx: {
      width: '100%',
      fontFamily: 'Satoshi Medium',
      fontSize: { laptop: '14px', desktop: '16px', desktopMedium: '18px' },
      color: (theme) => theme.palette.primary.main,
    },
  },
  messageWrapperProps: (isMyMessage) => ({
    position: 'relative',
    container: true,
    item: true,
    width: 'auto',
    maxWidth: '100%',
    flexDirection: !isMyMessage && 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    gap: '20px',
    sx: (theme) => ({
      borderRadius: isMyMessage && '10px 10px 0px 10px',
      [theme.breakpoints.down(800)]: {
        py: isMyMessage && 1,
        px: isMyMessage && 2,
      },
      [theme.breakpoints.between(800, 1080)]: {
        py: isMyMessage && 1.5,
        px: isMyMessage && 2.5,
      },
      [theme.breakpoints.up(1080)]: {
        py: isMyMessage && 2,
        px: isMyMessage && 3,
      },
      textAlign: 'left',
      // background: (theme) => isMyMessage && theme.palette.primary.main,
      background: isMyMessage && '#33363C',
    }),
  }),
};

export default styles;
