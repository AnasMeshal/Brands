import classNames from "classnames";
import { useEffect, useState } from "react";

const Header = (_) => {
  const [scrolled, setScrolled] = useState();
  const classes = classNames("header", {
    scrolled: scrolled,
  });
  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={classes}>
      <h1>Your website</h1>
      <style jsx>{`
        .header {
          transition: background-color 0.2s;
        }
        .header.scrolled {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </header>
  );
};
export default Header;
