import ContactForm, { ContactFormFields, ContactFormServerResponse } from '@/components/contact/ContactForm';
import Meta from '@/components/Meta';
import Page from '@/components/page/Page';

const ContactPage = () => {
  const send = async (fields: ContactFormFields): Promise<ContactFormServerResponse> => {
    const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    });

    const json: ContactFormServerResponse = await res.json();
    return json;
  };

  return (
    <Page title="Contact Us" subtitle="Get in touch with us using the form below">
      <Meta
        title="Contact Us"
        description="Shoot us a letter yo"
        url="/contact"
      />

      <ContactForm send={send} />
    </Page>
  );
};

export default ContactPage;
