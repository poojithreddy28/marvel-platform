import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Prism from 'prismjs';
import 'prismjs/components/prism-python'; // Add the required language
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-tomorrow.css'; // Choose your theme
import { useEffect } from 'react';
import emoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

import MemoizedReactMarkdown from '@/components/MemoizedMarkdown';
import ImageURLs from '@/assets/urls';

import CodeComponent from '../CodeComponent';


import markdownStyles from './TextMessage.module.css';

import styles from './styles';

const TextMessage = (props) => {
  const { isMyMessage, message } = props;

  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting
  }, [message]);

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
          )}
          <Typography {...styles.messageProps()}>
            <MemoizedReactMarkdown
              remarkPlugins={[remarkGfm, emoji]}
              className={`${markdownStyles['markdown-body']} `}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <pre className={`language-${match[1]}`}>
                      <code className={`language-${match[1]}`} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message}
            </MemoizedReactMarkdown>
          </Typography>

        </Grid>
      )}
    </>
  );
};

export default TextMessage;