export const cardNumberMask = [
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	"-",
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	"-",
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	"-",
	/\d/,
	/\d/,
	/\d/,
	/\d/
]
export const expireDateMask = [
	  /\d/,
		/\d/,
		"/",
		/\d/,
		/\d/
]
export const cvvMask = [
	/\d/,
	/\d/,
	/\d/
]
export const telephone = ['(','+', '3','8','0', ')', ' ', /\d/, /\d/, ' ', /\d/,  /\d/,'-', /\d/, /\d/,'-', /\d/, /\d/, /\d/]