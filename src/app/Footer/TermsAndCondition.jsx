import React from "react";
import Script from "next/script";

const TermsAndConditions = () => {
  return (
    <div id="termsandconditions" className="max-w-3xl mx-auto p-6 text-gray-800">
      <Script id="google_analytics" async src="https://www.googletagmanager.com/gtag/js?id=G-ZLP3CMVLW0"></Script>
      <Script
      id="google_analytics"
      dangerouslySetInnerHTML={{
      __html:`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZLP3CMVLW0');
      `,
      }}
      />
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-gray-600"><strong>Last Updated: [Insert Date]</strong></p>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">1. Definitions</h2>
        <ul className="list-disc pl-5">
          <li><strong>Company, we, us, or our</strong> refers to Indi Hendrix, headquartered in Johannesburg, Gauteng.</li>
          <li><strong>You or User</strong> refers to any individual or entity accessing our services.</li>
          <li><strong>Services</strong> refers to all creative and artistic works, including digital art, visual media, and multimedia experiences provided by Indi Hendrix.</li>
        </ul>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">2. Use of Services</h2>
        <p>Our services are intended for those seeking artistic and creative works. You agree to use our services for lawful purposes only and comply with all applicable regulations. We reserve the right to modify, suspend, or terminate any service at our discretion.</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
        <p>All content, trademarks, logos, and works displayed on our platform are owned by Indi Hendrix or its licensors. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited.</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">4. Privacy Policy</h2>
        <p>Your use of our services is also governed by our Privacy Policy, which outlines how we collect, store, and protect your data. We do not share personal information with third parties without consent, except where required by law.</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
        <p>Indi Hendrix provides its services as is without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">6. Third-Party Services</h2>
        <p>Our services may include links to third-party websites or platforms. We are not responsible for the content or reliability of these third-party services.</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">7. Changes to Terms</h2>
        <p>We reserve the right to update these Terms at any time. Changes will be posted on our website, and your continued use of our services constitutes acceptance of the new Terms.</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">8. Governing Law</h2>
        <p>These Terms shall be governed by the laws of South Africa. Any disputes arising from these Terms shall be resolved in the courts of South Africa.</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">9. Contact Us</h2>
        <p>For any inquiries regarding these Terms, please contact us at:</p>
        <ul className="list-disc pl-5">
          <li><strong>Indi Hendrix</strong></li>
          <li>Website: <a href="https://indihendrix.com" className="text-blue-600 underline">https://indihendrix.com</a></li>
          <li>Phone: +27 67 878 7907</li>
          <li>Headquarters: Pretoria, Gauteng, South Africa</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
