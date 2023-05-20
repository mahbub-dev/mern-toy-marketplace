import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `GeniusGadgets | ${title}`;
	}, [title]);
};
export default useTitle;
