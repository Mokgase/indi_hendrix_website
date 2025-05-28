import React, { useState } from "react";
import styles from "../Style/newsLetter.module.css";
import Button from "../Components/Button";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Newsletter Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textarea}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button text="Send" />
      </form>
      {status === "success" && <p className={styles.success}>✅ Subscription successful!</p>}
      {status === "error" && <p className={styles.error}>❌ Invalid email or an error occurred. Please try again.</p>}
    </div>
  );
};

export default NewsLetter;
