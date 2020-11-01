// This is a test API endpoint to test the contact form. It tries to replicate
// the live API's behavior and responses. You'll get different results based on
// the contents of the `message` field:
//
//   - number between 210 and 220: will reset the recaptcha
//   - number between 400 and 404: will reload the page
//   - number 910: will redirect to the home page
//   - any other number will return an "unknown error"
//   - if the field contains anything else, it will act as if it was a
//     successful request
//
// POST /api/contact

import { ContactFormFields } from '@/components/contact/ContactForm';
import { NextApiRequest, NextApiResponse } from 'next';

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  const { message }: ContactFormFields = req.body;

  const code = parseInt(message, 10);

  if (!code) {
    return res.json({
      code: 0,
      message: 'success',
      payload: null
    });
  }

  return res.json({
    code,
    message: 'Something happened I guess.',
    payload: null
  });
};
