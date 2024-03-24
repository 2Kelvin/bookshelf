import express from 'express';


// creating my express server
const app = express();

// express server application listening on port 3000
app.listen(3000, () => {
  console.log('********** Backend connected **********');
  console.log('********** (Express app is running on port 3000) **********');
});