const styles = {
  defaultPromptsGridContainer: {
    sx: {
      margin: '0px 0px 10px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '16px',
    },
  },
  defaultPrompt: {
    sx: (theme) => ({
      color: '#9E94A5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      [theme.breakpoints.down(800)]: {
        padding: '4px 10px',
        gap: '0px',
      },
      [theme.breakpoints.between(800, 1080)]: {
        padding: '8px 16px',
        gap: '6px',
      },
      [theme.breakpoints.up(1080)]: {
        padding: '16px 24px',
        gap: '16px',
      },
      background: '#181A20',
      boxShadow: '0px 4px 8.9px rgba(0, 0, 0, 0.25)',
      border: '2px solid rgba(172, 146, 255, 0.55)',
      borderRadius: '20px',
      cursor: 'pointer',
      flex: '1',
      alignSelf: 'stretch',
      transition: 'all 0.5s ease',
      transformOrigin: 'center center',
      wordWrap: 'break-word',
      '&:hover': {
        color: '#9E86FF',
        borderColor: '#9E86FF',
        transform: 'scale(1.05)',
      },
    }),
  },
  defaultPromptStarLogo: {
    sx: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: '0px',
      gap: '10px',
    },
  },
  promptText: {
    sx: (theme) => ({
      [theme.breakpoints.down(800)]: {
        fontSize: '13px',
      },
      [theme.breakpoints.between(800, 1080)]: {
        fontSize: '15px',
      },
      [theme.breakpoints.up(1080)]: {
        fontSize: '18px',
      },
    }),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.02em',
    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
    transition: 'all 0.5s ease',
  },
};

export default styles;
