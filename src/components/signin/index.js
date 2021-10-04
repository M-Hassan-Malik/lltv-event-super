import "./style.css";
import { useState } from "react";
import axios from "axios";
import { ServerURL } from "../../src_super/dashboard/url";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Signin = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChanges = (e) => {
		const { name, value } = e.target;
		name === "email" ? setEmail(value) : setPassword(value);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		let data = {
			email: email,
			password: password,
		};
		axios
			.post(`${ServerURL}/api/logging/super-admin-signin`, {
				data: JSON.stringify(data),
			})
			.then((res) => {
				console.log("data", res.data);
				res.data.result !== null && !res.data.error
					? history.push("/admin/dashboard")
					: res.data.result === null
					? alert("User not found!")
					: res.data.error
					? alert("User not found because: " + res.data.error)
					: console.log("Else:->", res.data);
			});
	};

	return (
		<>
			<Header />
			<div id="body1">
				<div class="main">
					<div class="form">
						<img
							src={require(`./image/brella-io-logo-vector.png`).default}
							alt="Logo"
						/>
						<p>
							Meet new people at events and <br />
							conferences
						</p>
						<input
							name="email"
							type="text"
							placeholder="hello@example.com"
							onChange={handleChanges}
						/>
						<br />
						<input
							name="password"
							type="password"
							placeholder="Password"
							onChange={handleChanges}
						/>
						<br />
						<small style={{ padding: "0px" }}>
							<i>We’ll check if you have an account</i>
						</small>
						<br />
						<button class="button" onClick={handleLogin}>
							continue with email
						</button>
						<br />
						<br />
						<br />
						<a href="">Continue with LinkedIn, Google, Apple or Facebook</a>
						<br />
						<br />
						<br />
						<hr />
						<br />
						<br />
						<br />
						<span>
							Signing in means you accept our{" "}
							<a href="">Terms & Privacy Policy</a>
						</span>
						<br />
						<br />
						<span>
							Brella is the world's leading{" "}
							<a href="">event networking software</a>
						</span>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Signin;
