const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Docker is pretty cool'
    });
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`app is now listening on Port: ${port}`)
})
