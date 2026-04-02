'use client';
import { EnquiryProvider } from './Context/EnquiryContext';

export default function Providers({ children }) {
  return <EnquiryProvider>{children}</EnquiryProvider>;
}
