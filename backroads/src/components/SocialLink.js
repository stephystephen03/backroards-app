import React from "react";

const SocialLink = ({parentClass, href, icon}) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={parentClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;

