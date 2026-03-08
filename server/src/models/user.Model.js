import { pool } from "../config/db.js";

export const createUser = async (name, email, hashed_password, role) => {
  const query =
    "insert into users (name, email , hashed_password, role) values ($1, $2, $3, $4) returning id ,name , email, role";
  const result = await pool.query(query, [name, email, hashed_password, role]);
  return result.rows[0];
};

export const getUserById = async (id) => {
  const result = await pool.query(
    "select name, email, hashed_password, role from users where id = $1",
    [id],
  );
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const result = await pool.query(
    "select id, name, email, hashed_password, role from users where email = $1",
    [email],
  );
  return result.rows[0];
};

export const getAllUsers = async () => {
  const result = await pool.query("select id, name, email, role from users");
  return result.rows;
};

export const updateUserById = async (id, name, email) => {
  const result = await pool.query(
    `update users set name = $1,
     email = $2
     where id = $3 returning id , name ,email`,
    [name, email, id],
  );
  return result.rows[0];
};

export const deleteUserById = async (id) => {
  await pool.query("delete from users where id=$1", [id]);
};


// export const saveRefreshToken = async (id, refreshToken) => {
//   await pool.query(`update users set refresh_token = &1 where id = $2` , [refreshToken, id])
// } insted the code don here start from line 51-58.


export const saveRefreshToken = async (userId, refreshToken) => {
  const query = `
    UPDATE users
    SET refresh_token = $1
    WHERE id = $2
  `;
  return pool.query(query, [refreshToken, userId]);
};