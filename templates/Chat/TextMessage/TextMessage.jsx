import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import emoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

import MemoizedReactMarkdown from '@/components/MemoizedMarkdown';
import ImageURLs from '@/assets/urls';
import CodeComponent from '../CodeComponent';
import styles from './styles';

const TextMessage = (props) => {
  const { isMyMessage, message } = props;

  return (
    <>
      {isMyMessage ? (
        // User message with fade-in and fade-out effect
        <Grid id="message" {...styles.mainGridProps(isMyMessage)}>
          <Grid {...styles.messageWrapperProps(isMyMessage)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1], // Material Design easing
              }}
            >
              <Typography {...styles.messageProps()}>
                <MemoizedReactMarkdown
                  remarkPlugins={[remarkGfm, emoji]}
                  components={{ code: CodeComponent }}
                >
                  {message}
                </MemoizedReactMarkdown>
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      ) : (
        // AI message with fade-in and fade-out effect, avatar remains static
        <Grid id="message" {...styles.mainGridProps(isMyMessage)}>
          <Grid {...styles.messageWrapperProps(isMyMessage)}>
            <Box>
              <Image
                width="38.74px"
                height="38.74px"
                src={ImageURLs.MarvelCircleAvatar}
                alt="Marvel AI"
              />
            </Box>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                
              >
                <Typography {...styles.messageProps()}>
                  <MemoizedReactMarkdown
                    remarkPlugins={[remarkGfm, emoji]}
                    components={{ code: CodeComponent }}
                  >
                    {message}
                  </MemoizedReactMarkdown>
                </Typography>
              </motion.div>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TextMessage;