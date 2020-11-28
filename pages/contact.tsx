import ContactForm, { ContactFormFields, ContactFormServerResponse } from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import Map from '@/components/contact/Map';
import Meta from '@/components/Meta';
import Page from '@/components/page/Page';

const ContactPage = () => {
  const send = async ({name, email, message, recaptcha}: ContactFormFields): Promise<ContactFormServerResponse> => {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);
    data.append('recaptcha', recaptcha);

    const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_URL, {
      method: 'POST',
      body: data
    });

    const json: ContactFormServerResponse = await res.json();
    return json;
  };

  return (
    <Page title="Contact Us" subtitle="Get in touch with us using the form below">
      <Meta
        title="Contact Us"
        description="Get in touch with us to query information, report issues or just to appreciate our work"
        url="/contact"
      />

      <ContactForm send={send} />
      <ContactInfo />
      <Map lat={8.56662152817464} lng={76.87463985585467} />
    </Page>
  );
};

export default ContactPage;
