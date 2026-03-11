//connect postegresql with node

import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

 export const pool = new Pool({
    
  connectionString: process.env.CCONNECTION_STRING,
});

export const connectDB = async () => {
    try {
      const client = await pool.connect();
      console.log("PostgreSQL connected successfilly");
      client.release();
    }catch (error){
        console.error("Database connection error:", error.message)
        process.exit(1);
    }
}

