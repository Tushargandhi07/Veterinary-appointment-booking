// import { createClient } from 'redis';
const redis=require("redis");

const client = redis.createClient({
    password: 'ZUKPx65HD8sFHALLK5lFaxQ8pA1cjvWR',
    socket: {
        host: 'redis-19068.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 19068
    }
});

client.connect();

client.on("error", (error) => {
  console.log(error.message);
});
client.on("connect", () => {
  console.log("Connected to the redis cloud");
});
module.exports={client}