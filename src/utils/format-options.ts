export const formatOptionType = (optionType: string) => {
	console.log(optionType)
	console.log(optionType.split(".")[1])
	return  {
	  value: optionType,
	  label: optionType.split(".").length === 2 ? optionType.split(".")[1] : optionType,
	}
  }
  