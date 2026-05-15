"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("");

  const navItems = [

    {
      name: "About",
      link: "#about",
    },

    {
      name: "Skills",
      link: "#skills",
    },

    {
      name: "Projects",
      link: "#projects",
    },

    {
      name: "Education",
      link: "#education",
    },

    {
      name: "Experience",
      link: "#experience",
    },

    {
      name: "Certifications",
      link: "#certifications",
    },

    {
      name: "Patent",
      link: "#patent",
    },

    {
      name: "Contact",
      link: "#contact",
    },

  ];

  useEffect(() => {

    const handleScroll = () => {

      const sections = navItems.map(
        (item) =>
          document.querySelector(item.link)
      );

      sections.forEach((section, index) => {

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 120 &&
          rect.bottom >= 120
        ) {

          setActive(navItems[index].link);

        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-black/40
        border-b
        border-cyan-500/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <a
          href="#"
          className="
            text-3xl
            font-black
            text-cyan-400
            tracking-tight
            hover:scale-105
            transition
          "
        >
          Tanzil.dev
        </a>



        {/* NAV LINKS */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.link}
              className={`
                relative
                text-sm
                font-semibold
                tracking-wide
                transition-all
                duration-300
                hover:text-cyan-400

                ${
                  active === item.link
                    ? "text-cyan-400"
                    : "text-white"
                }
              `}
            >

              {item.name}

              {/* ACTIVE UNDERLINE */}
              <span
                className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  bg-cyan-400
                  transition-all
                  duration-300

                  ${
                    active === item.link
                      ? "w-full"
                      : "w-0"
                  }
                `}
              />

            </a>

          ))}

        </nav>

      </div>

    </header>

  );

}