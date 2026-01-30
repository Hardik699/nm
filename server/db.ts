import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;
let connectionPromise: Promise<typeof mongoose> | null = null;

export async function connectDB() {
  if (!MONGODB_URI) {
    console.warn(
      "⚠️  MONGODB_URI environment variable is not set. MongoDB features will not be available.",
    );
    return;
  }

  if (isConnected) {
    console.log("Already connected to MongoDB");
    return mongoose;
  }

  // Return existing connection attempt if in progress
  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = (async () => {
    try {
      console.log("🔄 Attempting to connect to MongoDB...");
      await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 15000,
        socketTimeoutMS: 15000,
        retryWrites: true,
        w: "majority",
      });

      isConnected = true;
      console.log("✅ Connected to MongoDB successfully");
      return mongoose;
    } catch (error) {
      connectionPromise = null;
      console.error("❌ MongoDB connection error:", error);
      throw error;
    }
  })();

  return connectionPromise;
}

export async function disconnectDB() {
  if (isConnected) {
    await mongoose.disconnect();
    isConnected = false;
    console.log("Disconnected from MongoDB");
  }
}

export default mongoose;
