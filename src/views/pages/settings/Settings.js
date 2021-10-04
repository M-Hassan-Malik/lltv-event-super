import "./Settings.css";
import { useState } from "react";
import { Table } from "reactstrap";

const Settings = () => {
  const [title, setTitle] = useState("");
  const [Tagline, setTagline] = useState("");
  const [Email, setEmail] = useState("");
  const [Membership, setMembership] = useState("");
  const [Role, setRole] = useState("");
  const [Language, setLanguage] = useState("");
  const [Timezone, setTimezone] = useState("");
  const [DateFormat, setDateFormat] = useState("F j, Y");
  const [TimeFormat, setTimeFormat] = useState("");

  const handleChanges = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "title":
        break;
      case "tagline":
        break;
      case "email":
        break;
      case "membership":
        break;
      case "role":
        break;
      case "language":
        break;
      case "timezone":
        break;
      case "dateFormat":
        break;
      case "timeFormat":
        break;
    }
  };

  return (
    <div className="settings-main">
      <h1>General Settings</h1>
      <form id="form">
        <div className="form-group-label">
          <Table>
            <tr>
              <td>
                <label>Site Title</label>
              </td>
              <td>
                <input name="title" onChange={handleChanges} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Site Tagline</label>
              </td>
              <td>
                <input name="tagline" onChange={handleChanges} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Administration Email Address</label>
              </td>
              <td>
                <input name="email" onChange={handleChanges} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Membership</label>
              </td>
              <td>
                Anyone can regsiter &nbsp;
                <input type="checkbox" onChange={handleChanges} />
              </td>
            </tr>

            <tr>
              <td>
                <label>New User Default Role</label>
              </td>
              <td>
                <select name="role" onChange={handleChanges}>
                  <option>Subscriber</option>
                  <option>Editor</option>
                  <option>Contributor</option>
                  <option>Administrator</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label>Site Language</label>
              </td>
              <td>
                <select name="language" onChange={handleChanges}>
                  <option>English (US)</option>
                  <option>English (British)</option>
                  <option>English General</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label>Timezone</label>
              </td>
              <td>
                <input name="timezone" onChange={handleChanges} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Date Format</label>
              </td>
              <td>
                <div id="radio" name="dateFormat" onChange={handleChanges}>
                  <div>
                    <input type="radio" value={"F j, Y"} />
                    &nbsp; September 30, 2021
                  </div>
                  <div>
                    <input type="radio" value={"Y-m-d"} />
                    &nbsp; 2021-09-30
                  </div>
                  <div>
                    <input type="radio" value={"m/d/Y"} />
                    &nbsp; 09/30/2021
                  </div>
                  <div>
                    <input type="radio" value={"d/m/Y"} />
                    &nbsp; 30/09/2021
                  </div>
                  <nobr>
                    <b>Preview:</b> 2021-09-30
                  </nobr>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <label>Time Format</label>
              </td>
              <td>
                <div id="radio" name="timeFormat" onChange={handleChanges}>
                  <div>
                    <input type="radio" value={"g:i a"} />
                    &nbsp; 8:49 am
                  </div>
                  <div>
                    <input type="radio" value={"g:i A"} />
                    &nbsp; 8:49 AM
                  </div>
                  <div>
                    <input type="radio" value={"H:i"} />
                    &nbsp; 08:49
                  </div>
                  <nobr>
                    <b>Preview:</b> 8:49 am
                  </nobr>
                </div>
              </td>
            </tr>
          </Table>
        </div>
      </form>
    </div>
  );
};

export default Settings;
