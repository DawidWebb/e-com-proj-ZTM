import { CATEGORIES } from "../categories-menu/categories-menu";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = () => {
	return (
		<div className="directory-container">
			{CATEGORIES.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Directory;
