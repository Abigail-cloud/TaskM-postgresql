const express = require('express');
const app = express()
const cors = require('cors');

const tasksRouter= require('./routes/task')



//middleware(s)
app.use(cors())
app.use(express.json())


//routers
app.use('/api/v1',tasksRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening on  ${port}`);
})
