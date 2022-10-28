export const formatOptionType = (optionType: string) => {
	return ({
	  value: optionType,
	  label: optionType?.split(".").length === 2 ? optionType.split(".")[1] : optionType,
	});
  }
  