import React from "react";
import { FooterStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import {  FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
  return (
    <FooterStyle>
      <p>@2021</p>
      <Flex>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/dennisjunior247"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/mwlite/in/dennis-junior-180957197"
            >
              <FaLinkedinIn />
            </a>
          </li>

          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/DennisJunior247"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://gitlab.com/dennisjunior247"
            >
              <AiFillGitlab />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/dennisjunior.szn/"
            >
              <TiSocialInstagram />
            </a>
          </li>
        </ul>
      </Flex>
    </FooterStyle>
  );
};
export default Footer;
