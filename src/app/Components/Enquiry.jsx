// Components/Enquiry.jsx
"use client";
import { createContext, useContext, useState } from "react";

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState([]);
  const addToEnquiries = (painting) => {
    setEnquiries((prev) => {
      if (prev.find((p) => p.title === painting.title)) return prev; // avoid duplicates
      return [...prev, painting];
    });
  };

  const removeFromEnquiries = (title) => {
    setEnquiries((prev) => prev.filter((p) => p.title !== title));
  };

  return (
    <EnquiryContext.Provider value={{ enquiries, addToEnquiries, removeFromEnquiries }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => useContext(EnquiryContext);
