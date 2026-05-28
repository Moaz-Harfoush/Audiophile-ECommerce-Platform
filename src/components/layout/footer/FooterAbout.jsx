import React from "react";

const FooterAbout = () => {
  return (
    <div className="text-center md:text-left space-y-12">
      {/* Informational description about the company platform */}
      <p className="text-text-muted">
        Audiophile is an all in one stop to fulfill your audio needs. We are a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      {/* Copyright statement text */}
      <p className="text-text-muted font-bold">
        Copyright 2024. All Rights Reserved
      </p>
    </div>
  );
};

export default FooterAbout;
