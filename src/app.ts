import config from "./config";
import express from "express";

const app = express();
async function startServer() {
  try {
    await (await import("./loaders")).default({ expressApp: app });

    app
      .listen(config.serverPort, () => {
        console.log(`
      ################################################
      🛡️  Server listening on port: ${config.serverPort} 🛡️
      ################################################
    `);
      })
      .on("error", (err) => {
        console.log(err);
        process.exit(1);
      });
  } catch (error) {
    console.log(error);
  }
}

startServer();

export { app, startServer };
