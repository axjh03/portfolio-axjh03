import React from "react";
import "./pagesCSS/Contact.css";

function Contact() {
  return (
    <>
      <div class="flex flex-col items-center justify-center h-auto text-wrap contact-text">
        <p>I'm currently looking for<br></br> <span class="italic">Full-time software engineering roles</span></p>
        <p>
          Feel free to reach out to me at{" "}
          <a
            class="underline"
            href="mailto:axjh03@gmail.com"
          >
            axjh03@gmail.com
          </a>{" "}
        </p>
      </div>
    </>
  );
}

export default Contact;
