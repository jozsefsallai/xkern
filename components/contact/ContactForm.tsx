import styles from './ContactForm.module.scss';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useRef, FormEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import Link from 'next/link';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export interface ContactFormFields {
  name: string;
  email: string;
  message: string;
  recaptcha: string;
}

export interface ContactFormServerResponse {
  code: number;
  message: string;
  payload?: any;
}

export interface ContactFormParams {
  send(fields: ContactFormFields): Promise<ContactFormServerResponse>;
}

const ContactForm = ({ send }: ContactFormParams) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const [ success, setSuccess ] = useState(false);
  const [ error, setError ] = useState('');
  const [ sending, setSending ] = useState(false);

  const [ jiggle, setJiggle ] = useState(false);

  const router = useRouter();

  const captchaRef = useRef<ReCAPTCHA>({});

  const jiggleForm = () => {
    setJiggle(true);

    setTimeout(() => {
      setJiggle(false);
    }, 500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSending(true);
    setError('');
    setSuccess(false);

    const res = await send({
      name,
      email,
      message,
      recaptcha: captchaRef.current.getValue()
    });

    setSending(false);

    if (res.code === 0) {
      setSuccess(true);
      return;
    }

    if (res.code >= 210 && res.code <= 220) {
      captchaRef.current.reset();
      setError('CAPTCHA reset.');
      jiggleForm();

      return;
    }

    if (res.code >= 400 && res.code <= 404) {
      window.location.reload();
      return;
    }

    if (res.code === 910) {
      router.push('/');
      return;
    }

    setError(res.message ?? 'Internal Server Error');
    jiggleForm();
  };

  return (
    <>
      {!success && <form onSubmit={handleSubmit}>
        <div className={clsx({ jiggle })}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              id="name"
              disabled={sending}
              onChange={e => setName(e.currentTarget.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="you@are.awesome"
              id="email"
              disabled={sending}
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="What do you want to tell us today?"
              disabled={sending}
              onChange={e => setMessage(e.currentTarget.value)}
            />
          </div>

          <div className="input-group">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              ref={captchaRef}
              theme="dark"
            />
          </div>
        </div>

        <div className="input-group buttons">
          <button type="submit" className="single-button" disabled={sending}>Send</button>
          {sending && <LoadingSpinner color="#fff" />}
          {error.length > 0 && <small className="form-error">{error}</small>}
        </div>
      </form>}

      {success && <div className={styles.success}>
        <div className={styles.title}>Thanks for contacting us!</div>
        <p className={styles.subtitle}>Your message has been sent successfully.</p>
        <p><Link href="/">&laquo; Back to the Home Page</Link></p>
      </div>}
    </>
  );
};

export default ContactForm;
