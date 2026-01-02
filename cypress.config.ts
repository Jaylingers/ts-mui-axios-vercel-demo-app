import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    video: true,             // enable/disable video recording
    videoCompression: 32,    // compress size (0=none, higher=more compressed)
    videosFolder: "cypress/videos", // folder to save videos
  },
});
