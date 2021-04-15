// This is a test API endpoints for testing employee data fetching. It tries to
// replicate the live API's expected behavior and responses. There is a
// designated server key that needs to match whatever the user provides in the
// `secret` query paramter, otherwise it will return 403.
//
// Note that the security of this process should be greatly improved on the live
// API.
//
// POST /api/employees/:id?secret=:secret

import { NextApiRequest, NextApiResponse } from 'next';

import * as path from 'path';
import * as fs from 'fs';

const SERVER_SECRET = 'are-ya-winning-watson'; // devserver secret
const DB_PATH = path.join(process.cwd(), 'temp', 'employees.json');

export default function get(req: NextApiRequest, res: NextApiResponse) {
  const { id, secret } = req.query;

  if (secret !== SERVER_SECRET) {
    return res.status(403).json({
      code: 403,
      message: 'Incorrect server secret.'
    });
  }

  const db = fs.existsSync(DB_PATH)
    ? JSON.parse(fs.readFileSync(DB_PATH, { encoding: 'utf8' }))
    : [];

  const targetEmployee = db.find(employee => employee.employeeId === id);
  if (!targetEmployee) {
    return res.status(404).json({
      code: 404,
      message: 'Employee not found.'
    });
  }

  return res.json({
    code: 0,
    message: 'success',
    data: targetEmployee
  });
};
