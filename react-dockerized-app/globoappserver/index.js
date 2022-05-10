const express = require('express')
const redis = require('redis')

const server = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set('inventorycount', 0);
server.get('/api/get', (req, res) => {
    client.get('inventorycount', (err, count) => {
        console.log("Items in inventory "+count);
        count = parseInt(count)+1;
        res.json(count);
        client.set('inventorycount', count)
    });
});

server.listen(8080, () => {
    console.log("Globoapp server listening on port 8080");
});
