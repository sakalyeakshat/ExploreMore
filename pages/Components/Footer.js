import React from "react";

const Footer = () => {
  return (
    <div className="text-black bg-green-500/20 pt-2 pb-5 border-t mt-md-5 d-flex flex-column flex-md-row justify-content-between">
      <div className="text-center">
        <p className="mb-0">
          Copyright &nbsp;
          {new Date().getFullYear()} - A N NOUFEL &nbsp; | Website Designed and
          Developed By &nbsp;
          <a href="https://www.honeycombindia.net" className="text-success">
            Mayank and Aaradhya
          </a>
        </p>
      </div>
      <div className="text-center pt-3 pt-md-0">
        <a
          href="https://www.anamalahomestays.com/terms"
          className="text-black text-decoration-none mx-2">
          Terms &amp; Conditions
        </a>
        <a
          href="https://www.anamalahomestays.com/privacy"
          className="text-black text-decoration-none mx-2">
          Privacy Policy
        </a>
        <a
          href="https://www.anamalahomestays.com/cancellation_policy"
          className="text-black text-decoration-none mx-2">
          Cancellation Policy
        </a>
        <a
          href="https://www.anamalahomestays.com/faqs"
          className="text-black text-decoration-none mx-2">
          FAQs
        </a>
      </div>
    </div>
  );
};

export default Footer;
