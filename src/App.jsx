import { useState, useEffect } from "react";
import axios from "axios";
import Count from "./components/count/Count";
import IsSeven from "./components/isSeven/IsSeven";
import MyComponent from "./components/myComponent/MyComponent";
import scss from "./App.module.scss";

const url = import.meta.env.VITE_BACKEND_URL;

function App() {
	const [users, setUsers] = useState([]);
	const [inputName, setInputName] = useState("");
	const [inputUrl, setInputUrl] = useState("");
	const [inputNumber, setInputNumber] = useState("");
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	const getRequest = async () => {
		const response = (await axios.get(url)).data;
		setUsers(response);
	};

	const postRequest = async () => {
		const newObj = {
			inputName,
			inputUrl,
			inputNumber,
		};
		const response = (await axios.post(url, newObj)).data;
		setUsers(response);
		setInputName("");
		setInputUrl("");
		setInputNumber("");
	};

	const deleteRequest = async (id) => {
		await axios.delete(`${url}/${id}`);
		const updatedUsers = users.filter((user) => user._id !== id);
		setUsers(updatedUsers);
	};

	useEffect(() => {
		getRequest();
	}, []);

	return (
		<div className={scss.App}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.inputcontent}>
						<div className={scss.inputcard}>
							<input
								type="text"
								placeholder="name"
								value={inputName}
								onChange={(e) => setInputName(e.target.value)}
							/>
							<input
								type="text"
								placeholder="url"
								value={inputUrl}
								onChange={(e) => setInputUrl(e.target.value)}
							/>
							<input
								type="number"
								placeholder="number"
								value={inputNumber}
								onChange={(e) => setInputNumber(e.target.value)}
							/>
							<button onClick={postRequest}>Add</button>
						</div>
					</div>

					<div className={scss.cards}>
						{users.map((item) => (
							<div className={scss.card} key={item._id}>
								<h1>{item.inputName}</h1>
								<img src={item.inputUrl} alt="" />
								<p>{item.inputNumber}</p>
								<button onClick={() => deleteRequest(item._id)}>Delete</button>
							</div>
						))}
					</div>
					<div className={scss.count}>
						<p>Первый коунтер</p>
						<button onClick={() => setCount1(count1 + 1)}>+</button>
						<Count id={1} value={count1} />
						<p>Второй коунтер</p>
						<button onClick={() => setCount2(count2 + 1)}>+</button>
						<Count id={2} value={count2} />
						<IsSeven value={count2} />
						<MyComponent value={count1} />
					</div>
					<div className={scss.top}></div>
				</div>
			</div>
		</div>
	);
}

export default App;
