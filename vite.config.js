import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['./index.html', './sheet.html', './views/docs.html','./notification.html','new.html','video-chat.html','test.html','shared.html','recycle-bin.html','recent.html','paper.html','favourite.html','chat.html','document.html'],
    },
  },
});
