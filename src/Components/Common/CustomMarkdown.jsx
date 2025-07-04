/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Markdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import remarkMermaid from 'remark-mermaid-plugin';
import rehypeRaw from 'rehype-raw';
import { motion, AnimatePresence } from 'framer-motion';

const CustomMarkdown = ({ children, className = "" }) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    
    const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    };
    
    return (
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className={`markdown ${className}`}>
            <Markdown
              remarkPlugins={[remarkGfm, remarkMermaid]}
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ node, ...props }) => (<motion.p variants={variants} {...props} className='m-0'/>),
                h1: ({ node, ...props }) => (
                  <motion.h1
                        variants={variants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        {...props}
                    />),
                h2: ({ node, ...props }) => (
                  <motion.h2
                        variants={variants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        {...props}
                    />),
                ul: ({ node, ...props }) => (<motion.ul variants={staggerVariants} {...props} />),
                li: ({ node, ...props }) => (<motion.li variants={variants} {...props} />)
              }}
            >
              {children}
            </Markdown>
          </motion.div>
        </AnimatePresence>
      );
}

export default CustomMarkdown;