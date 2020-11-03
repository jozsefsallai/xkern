// This is a test API endpoint to test the job application form. It will return
// an error if the current minute is an even number and will succeed otherwise.
// I'm doing it this way so that we don't add unnecessary dependencies to the
// project (like formidable, for handling form data).

import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100mb'
    }
  }
};

export default function jobs(req: NextApiRequest, res: NextApiResponse) {
  const minute = new Date().getMinutes();

  if (minute % 2 === 0) {
    return res.json({
      code: 400,
      message: 'Test error triggered.',
      payload: null
    });
  }

  return res.json({
    code: 0,
    message: 'success',
    payload: null
  });
};
