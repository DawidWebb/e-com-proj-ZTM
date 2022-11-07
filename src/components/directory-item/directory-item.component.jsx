import { DivBackgroundImage, DivBody, DivDirectoryItemContainer } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
	return (
		<DivDirectoryItemContainer>
			<DivBackgroundImage imageUrl={imageUrl} />
			<DivBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DivBody>
		</DivDirectoryItemContainer>
	);
};

export default DirectoryItem;
