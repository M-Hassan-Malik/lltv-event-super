import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [hideTransparency, setHideTransparency] = useState(false);

  window.onscroll = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setHideTransparency(true);
    } else {
      setHideTransparency(false);
    }
  };

  return (
    <>
      <NavbarDesktop hideTransparency={hideTransparency} />
      <NavbarMobile hideTransparency={hideTransparency} />
    </>
  );
};

export default Navbar;
