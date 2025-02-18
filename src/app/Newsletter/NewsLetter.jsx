import React, { useState } from "react";
// import React from "react";
import styles from "../Style/newsLetter.module.css";
import Button from "../Components/Button";


const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus("error");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
  

  const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
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
          <Button text={"Send"} />
        </form>
        {status === "success" && <p className="success">✅ Subscription successful!</p>}
        {status === "error" && <p className="error">❌ Invalid email or error occurred.</p>}
      </div>
    );
  };
  
  export default NewsLetter;

// const NewsLetter =() =>{
//     return(
//         <div className={styles.container}>
//             <h1 className={styles.heading}>Newsletter sign up</h1>
//                         <ul className={styles.listItems}>
//                             <input className={styles.textarea} classtype="email" />
//                             <Button text={'Send'}/>
//                         </ul>
//         </div>
//     )
// }

// export default NewsLetter;