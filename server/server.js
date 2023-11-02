const express = require('express');
const app = express();

app.use(express.json());

app.get('/get-user-ip', (request, response) => {
  const userIpAddress = request.socket.remoteAddress || '';
  return response.json({ userIpAddress });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});