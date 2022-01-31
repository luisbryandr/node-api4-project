require('dotenv').config();

const express = require('express');

const server = express();

// server.get('/api/users', (req, res) => {
//     res.json([
//         {id: 1, username: 'lalala'},
//         {id: 2, username: 'lololo'},
//         {id: 3, username: 'hohoho'}
//     ])
// })

const PORT = process.env.PORT || 8090;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

server.get('/api/users', (req, res) => {
    res.json([
        {id: 1, username: 'lalala'},
        {id: 2, username: 'lololo'},
        {id: 3, username: 'hohoho'}
    ])
})