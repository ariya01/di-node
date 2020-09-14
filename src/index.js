"use strict";

const server = require("./server");
const port = 3000;

const app = server();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
