import { Drawer, Button, Divider } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import MainLogo from "../../assets/brellaMainLogo.svg";
import { BsArrowRight } from "react-icons/bs";

const NavbarMobile = ({ hideTransparency }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      className={
        hideTransparency ? "navbar-mobile navbar-mobile-fixed" : "navbar-mobile"
      }
    >
      <div className="mobile-header">
        <img src={MainLogo} />
        <Button shape="circle" icon={<MenuOutlined />} onClick={showDrawer} />
      </div>
      <Drawer
        title={<img src={MainLogo} />}
        placement={"top"}
        height={"100%"}
        closable={true}
        onClose={onClose}
        visible={visible}
        key={"top"}
        className="nav-drawer"
      >
        <div>
          <p>Home</p>
          <Divider />
          <p>Hybrid Event Platforms</p>
          <Divider />
          <p>Virtual Event Platforms</p>
          <Divider />
          <p>Pricing</p>
          <Divider />
          <p>About Us</p>
          <Divider />
        </div>
        <div className="bottom">
          <Button type="primary">
            Contact Sales <BsArrowRight />
          </Button>
          <h5>Sign in</h5>
        </div>
      </Drawer>
    </div>
  );
};

export default NavbarMobile;
