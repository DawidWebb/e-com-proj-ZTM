import { CATEGORIES } from "../categories-menu/categories-menu";
import DirectoryItem from "../directory-item/directory-item.component";
import { DivDirectoryContainer } from "./directory.styles";

const Directory = () => {
	return (
		<DivDirectoryContainer>
			{CATEGORIES.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DivDirectoryContainer>
	);
};

export default Directory;
