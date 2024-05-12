import { createClient, RedisClientType } from 'redis';

export class PubSubManager {
    private static instance: PubSubManager;
    private redisClient: RedisClientType;
    private subscription: Map<string, string[]>;

    // Private constructor to prevent direct construction calls with the `new` operator
    private constructor() {

        // Create a Redis client and connect to the Redis server
        this.redisClient = createClient()
        this.redisClient.connect();
        this.subscription = new Map();
    }
    public static getInstance() {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    public userSubscribe(userId: string, stock: string) {

        if (!this.subscription.has(stock)) {
            this.subscription.set(stock, [])
        }
        this.subscription.get(stock)?.push(userId);
        if (this.subscription.get(stock)?.length === 1) {
            this.redisClient.subscribe(stock, (message) => {
                this.handleMessage(stock,message)
            })
        }
    }
    public userUnSubscribe(userId: string, stock: string) {
        this.subscription.set(stock, this.subscription.get(stock)?.filter((sub) => sub !== userId) || [])
        if (this.subscription.get(stock)?.length === 0) {
            this.redisClient.unsubscribe(stock)
            console.log(`UnSubscribed to Redis channel: ${stock}`);

        }
    }

    private handleMessage(stock: string, message: string,) {
        console.log(`Message received on channel ${stock}: ${message}`);
        this.subscription.get(stock)?.forEach((sub) => {
            console.log(`Sending message to user: ${sub}`);
        })

    }

}