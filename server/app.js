const express = require('express');
const app = express()
const cors = require('cors');



//middleware(s)
app.use(cors())
app.use(express.json())



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening on  ${port}`);
})
