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

    }
    removeUserFromStock(userId: string, stockTicker: string) {

    }

    forwardMessageToUser(userId: string, stockTicker: string, price: string) {

    }
}