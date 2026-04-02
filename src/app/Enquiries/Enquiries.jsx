'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../Style/enquiries.module.css';
import Button from '../Components/Button';
import { useEnquiry } from '../Context/EnquiryContext';

const Enquiries = () => {
  const { enquiries, removeFromEnquiry, clearEnquiries } = useEnquiry();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enquiries.length === 0) return;

    const paintingsList = enquiries
      .map(
        (p, i) =>
          `${i + 1}. ${p.title}\n   Size: ${p.size || 'N/A'}\n   Price: ${p.price || 'N/A'}\n   Medium: ${p.medium || 'N/A'}\n   Year: ${p.year || 'N/A'}`
      )
      .join('\n\n');

    const fullMessage = `Painting Enquiries:\n\n${paintingsList}${
      mobile ? `\n\nMobile: ${mobile}` : ''
    }${message ? `\n\nAdditional Notes:\n${message}` : ''}`;

    emailjs
      .send(
        'service_aiael5j',
        'template_gtluvs6',
        {
          user_name: name,
          user_email: email,
          message: fullMessage,
        },
        'JLyAuDRbEpuDJRgII'
      )
      .then(
        () => {
          setSuccess(true);
          setName('');
          setEmail('');
          setMobile('');
          setMessage('');
          clearEnquiries();
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div id="enquiries" className="w-full h-full">
      <div className={styles.container}>
        <h1 className={styles.h1}>ENQUIRIES</h1>
        <hr className={styles.underline} />

        {success && (
          <div className={styles.successMessage}>
            ✅ Your enquiry has been sent successfully! We will get back to you soon.
          </div>
        )}

        {enquiries.length === 0 ? (
          <p className={styles.emptyState}>
            No paintings added yet. Click &quot;Enquire&quot; on a painting to add it here.
          </p>
        ) : (
          <ul className={styles.enquiryList}>
            {enquiries.map((painting) => (
              <li key={painting.title} className={styles.enquiryItem}>
                <img
                  src={painting.src}
                  alt={painting.title}
                  className={styles.itemThumb}
                />
                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>{painting.title}</p>
                  <p className={styles.itemMeta}>
                    {painting.size} &mdash; {painting.price || 'Price on request'} &mdash; {painting.year}
                  </p>
                  {painting.medium && (
                    <p className={styles.itemMeta}>{painting.medium}</p>
                  )}
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromEnquiry(painting.title)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {enquiries.length > 0 && (
          <form className={styles.formSection} onSubmit={handleSubmit}>
            <p className={styles.formTitle}>Fill in your contact details to send your enquiry</p>

            <div className={styles.formGroup}>
              <label className={styles.labels}>Name</label>
              <input
                required
                type="text"
                placeholder="Full name"
                className={styles.inputs}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labels}>Email</label>
              <input
                required
                type="email"
                placeholder="Email address"
                className={styles.inputs}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labels}>Mobile Number (optional)</label>
              <input
                type="tel"
                placeholder="e.g. +27 82 000 0000"
                className={styles.inputs}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labels}>Additional Notes (optional)</label>
              <textarea
                placeholder="Any additional questions or notes..."
                className={styles.textarea}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className={styles.submitRow}>
              <Button type="submit" value="Send Enquiry" text="Send Enquiry" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Enquiries;
