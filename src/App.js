import Routes from "./Routes";
import "antd/dist/antd.less";
import { useEffect } from "react";
import theme from "./theme.json";
import "./styles/styles.css";

function App() {
  useEffect(() => {
    Object.keys(theme).forEach((key) => {
      document.body.style.setProperty(`--${key}`, theme[key]);
    });
  }, []);
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
