'use client';
import { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext(null);

export function EnquiryProvider({ children }) {
  const [enquiries, setEnquiries] = useState([]);

  const addToEnquiry = (painting) => {
    setEnquiries((prev) => {
      if (prev.some((p) => p.title === painting.title)) return prev;
      return [...prev, painting];
    });
  };

  const removeFromEnquiry = (title) => {
    setEnquiries((prev) => prev.filter((p) => p.title !== title));
  };

  const clearEnquiries = () => setEnquiries([]);

  return (
    <EnquiryContext.Provider value={{ enquiries, addToEnquiry, removeFromEnquiry, clearEnquiries }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  return useContext(EnquiryContext);
}
