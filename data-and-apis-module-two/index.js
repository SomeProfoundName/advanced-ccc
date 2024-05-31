const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening @ 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

app.post('/api', (request, responce) => {
    console.log(request.body);
    const data = request.body;
    responce.json({
        status: 'success',
        latitude: data.latitude,
        longitude: data.longitude
    });
})