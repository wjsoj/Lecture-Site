import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'CourseCommunity',
  description: 'Rspack-based Static Site Generator',
  icon: '/logo_final.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/StephenQSstarThomas/Lecture-Notes' },
    ],
  },
  globalStyles: path.join(__dirname, '/src/styles/index.css'),
  globalUIComponents: [path.join(__dirname, '/src/components/PdfObject.tsx')],
});
