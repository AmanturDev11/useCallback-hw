import { useMemo } from "react";

const IsSeven = ({ value }) => {
	console.log("isSeven is rendering");

	const chekcNumber = () => {
		console.log("chekcNumber");
    for (let i = 0; i < 60000000; i++) {
      i++ 
    }
    return value === 7 ? 'Жетигк барабар' : 'Жетиге барабар эмес';
	};

  const result = useMemo(chekcNumber, [value])
	return <div>{result}</div>;
};

export default IsSeven;
