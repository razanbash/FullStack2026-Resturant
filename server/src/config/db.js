//connect postegresql with node

import { pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.connection_string,
});

pool.connectDB = async () => {
    try {
      const client = await pool.connect();
      console.log("PostgreSQL connected successfilly");
      client.release();
    }catch (error){
        console.error("Database connection error:", error.message)
        process.exit(1);
    }
}


export {connectDB, pool}