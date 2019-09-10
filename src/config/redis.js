import redis from 'redis';

export default redis.createClient({
  host: 'redis-10056.c73.us-east-1-2.ec2.cloud.redislabs.com',
  port: 10056,
  password: 'u3HKkEpoO1oV0fSqHGPN396RzMX99h3o',
});
