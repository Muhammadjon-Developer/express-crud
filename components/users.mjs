import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

// Adding users to our mock database

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.first_name} has been added to the Database`);
})  

export default router;