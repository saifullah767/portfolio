import { useState } from 'react';
import ThankYouPage from './ThankYouPage';

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [showThankYouPage, setShowThankYouPage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessKey = "a5cf57a7-5cf7-4b5b-9e45-098f734b76fb";

    if (!accessKey) {
      setStatus({
        type: 'error',
        message: 'Web3Forms is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY.'
      });
      return;
    }

    if (formData.botcheck) {
      setStatus({ type: 'error', message: 'Sending failed. Please try again in a moment.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const submitData = new FormData(event.target);
      submitData.append('access_key', accessKey);
      submitData.append('from_name', formData.name);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(`Web3Forms request failed with status ${response.status}`);
      }

      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' });
      setShowThankYouPage(true);
    } catch (error) {
      setStatus({ type: 'error', message: 'Sending failed. Please try again in a moment.' });
    } finally {
      setIsSending(false);
    }
  };

  if (showThankYouPage) {
    return <ThankYouPage onBack={() => setShowThankYouPage(false)} />;
  }

  return (
    <div id="contact" className="rn-contact-area rn-section-gap section-separator">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">{contact.subtitle}</span>
              <h2 className="title">{contact.title}</h2>
            </div>
          </div>
        </div>

        <div className="row mt--50 mt_md--40 mt_sm--40">
          <div className="col-lg-8 offset-lg-2">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit}>
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.botcheck}
                  onChange={handleChange}
                />

                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input type="submit" value={isSending ? 'Sending...' : 'Send Message'} disabled={isSending} />
                {status.message ? (
                  <p className={`form-message ${status.type === 'error' ? 'error' : 'success'} mt--20`}>
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
