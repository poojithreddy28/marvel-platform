import { useEffect } from 'react';
import { Box, Grid, Typography, Fade } from '@mui/material';
import Image from 'next/image';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-tomorrow.css'; // Syntax Highlighting Theme
import { motion } from 'framer-motion';
import emoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import MemoizedReactMarkdown from '@/components/MemoizedMarkdown';
import ImageURLs from '@/assets/urls';
import CodeComponent from '../CodeComponent';
import markdownStyles from './TextMessage.module.css';
import styles from './styles';
const TextMessage = ({ isMyMessage, message }) => {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting
  }, [message]);
  return (
    <Fade in>
      <Grid id="message" {...styles.mainGridProps(isMyMessage)}>
        <Grid {...styles.messageWrapperProps(isMyMessage)}>
          {!isMyMessage && (
            <Box>
              <Image
                width="38.74px"
                height="38.74px"
                src={ImageURLs.MarvelCircleAvatar}
                alt="Marvel AI"
              />
            </Box>
          )}
          <motion.div
            initial={{ opacity: 0, y: isMyMessage ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isMyMessage ? -10 : 10 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <Typography {...styles.messageProps()}>
              <MemoizedReactMarkdown
                remarkPlugins={[remarkGfm, emoji]}
                className={`${markdownStyles['markdown-body']} `}
                components={{
                  // eslint-disable-next-line react/no-unstable-nested-components
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
          </motion.div>
        </Grid>
      </Grid>
    </Fade>
  );
};
export default TextMessage;
