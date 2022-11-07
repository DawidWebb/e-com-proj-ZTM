import { FormInputLabel, Input, DivGroup } from "./form-input.styles.jsx";

const FormInput = ({ label, ...inputOptions }) => {
	return (
		<DivGroup>
			<Input {...inputOptions} />
			{label && <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>}
		</DivGroup>
	);
};

export default FormInput;
