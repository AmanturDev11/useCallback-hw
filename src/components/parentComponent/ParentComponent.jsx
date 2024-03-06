import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const ParentComponent = () => {
	const [count, setCount] = useState(0);

	const handleClick = useCallback(() => {
		console.log("Button clicked");
		setCount(count + 1);
	}, [count]);
	return (
		<div>
			ParentComponent
			<p>Count: {count}</p>
			<ChlidComponent onClick={handleClick} />
		</div>
	);
};

const ChildComponent = React.memo({ onClick });

export default ParentComponent;
