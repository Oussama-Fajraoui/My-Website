import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {};

const Header = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState<boolean>();
  useEffect(() => {
    if (theme === "light") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [theme]);

  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/Oussama-Fajraoui"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/OFajraoui"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/oussama-fajraoui%E2%9C%94-59436b22b/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://api.whatsapp.com/send?phone=26499227"
          fgColor="gray"
          bgColor="transparent"
        />
         <SocialIcon
          url="https://discord.com/users/957937549358284800"
          // fgColor="gray"
          // bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={`cursor-pointer w-8 h-5 md:w-16 md:h-10 flex items-center bg-gray-300 rounded-full p-1 ${
          toggle ? "bg-red-500 justify-end" : "justify-start"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <motion.div
          layout
          className="bg-white w-4 h-4 md:w-8 md:h-8 rounded-full shadow-md"></motion.div>
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300  cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-300 dark:text-gray-900">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
