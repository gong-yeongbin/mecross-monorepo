import config from './src/configs';
import app from './app';

import mongoose from 'mongoose';

const mongo_uri: string = config.mongo_uri;
mongoose
  .connect(mongo_uri)
  .then(() => console.log('[database]: successfully connected to mongodb'))
  .catch((e) => console.log(e));

const port: number = config.port || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost:${port}>`);
});
