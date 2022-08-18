import React from "react";
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask'
import "./Mean.css"
import {cardNumberMask, cvvMask, expireDateMask, telephone} from "../Mean/constants"
import {Link} from "react-router-dom";
// const inputAttrs = {
// 	maskChar: '',
// 	className: 'test',
// 	alwaysShowMask: true,
// };
const validateSchema = Yup.object({
	//transform преобразовівает введенніе значения в пустіе строки
	cardNumber: Yup.string()
		.required("This card is required")
		.transform(value => value.replace(/[^\d]/g, ''))
		.min(16, "Please enter 16 number "),
	expiryDate: Yup.string()
		.required("This data is required")
		.transform(value => value.replace(/[^\d]/g, ''))
		.min(4, "Please enter 4 number "),
	userName: Yup.string()
		.required("This data is required")
		.min(3, "Please enter 2 letter ")
		.matches(/[a-zA-Z]/ , 'Is not in correct format, only letter'),
	cvvCode: Yup.string()
		.required("This cvv is required")
		.transform(value => value.replace(/[^\d]/g, ''))
		.min(3, "Please enter 3 number "),
	tel: Yup.string()
		.required("This tel is required")
		.transform(value => value.replace(/[^\d]/g, ''))
		.min(12, "Please enter 12 number ")



});
//
// function handleSubmits() {
// 	console.log("7777")
//
// }

export const Means = () => (

	// const [cardNumber, setCardNumber] = useState(setInitialState(CARD_NUMBER_PLCH));
	// const [date, setDate] = useState(setInitialState(EXPIRY_DATE_PLCH));
	// const [code, setCode] = useState(setInitialState(CVV_CODE_PLCH));
	// const [phone, setTel] = useState(setInitialState(TELEPHONE_PLCH));


	// const handleChange = (event) => {
	// 	const value = event.target.value;
	// 	switch (event.target.id) {
	// 		case 'cardNumber':
	// 			setCardNumber({
	// 				value,
	// 				mask: CARD_NUMBER_PLCH,
	// 			});
	// 			break;
	// 		case "expiryDate":
	// 			setDate({
	// 				value,
	// 				mask: EXPIRY_DATE_PLCH,
	// 			});
	// 			break;
	// 		case 'cvv-code':
	// 			setCode({
	// 				value,
	// 				mask: CVV_CODE_PLCH,
	// 			});
	// 			break;
	// 		case 'telephone':
	// 			setTel({
	// 				value,
	// 				mask: TELEPHONE_PLCH,
	// 			});
	// 			break;
	// 	}
	// }


	<div className={"outside-wrap-form"}>


		<Formik initialValues={{cardNumber: "",
														expiryDate:"",
														userName:"",
														cvvCode: "",
														tel:""}}
		        validationSchema={validateSchema}
		        onSubmit={() => {
			        console.log(7777)
		        }}
		>

			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				isValid,
				dirty,
			  handleSubmit,}) => {

				return (

					<Form className={"form-wrap"} onSubmit={handleSubmit}>

						<div className={"form-item"}>
							{/*CARD NUMBER*/}
							<label htmlFor="cardNumber">Номер карти:</label>
							<div className="user-name-input">
								<Field
									name={"cardNumber"}
									render={({field}) => (
										<MaskedInput
											{...field}
											id="cardNumber"
											name={"cardNumber"}
											mask={cardNumberMask}
											placeholder="XXXX-XXXX-XXXX-XXXX"
										/>
									)}
								/>
								<div className="error">
									<ErrorMessage name="cardNumber"/>
								</div>
							</div>
						</div>



						<div className={"form-item"}>
							{/*{EXPIRY DATE}*/}
							<label htmlFor="expiryDate">Термін дії:</label>
							<div className="user-name-input">
								<Field
									name={"expiryDate"}
									render={({field}) => (
										<MaskedInput
											{...field}
											id="expiryDate"
											name={"expiryDate"}
											mask={expireDateMask}
											placeholder="ММ/РР"
										/>
									)}
								/>
								<div className="error">
									<ErrorMessage name="expiryDate"/>
								</div>
							</div>
						</div>



						<div className={"form-item"}>
							{/*{USER NAME}*/}
							<label htmlFor="userName">ПІБ власника:</label>
							<div className="user-name-input">
								<Field
									name={"userName"}
											id="userName"
											name={"userName"}
											placeholder="ПІБ власника"
								/>
								<div className="error">
									<ErrorMessage name="userName"/>
								</div>
							</div>
						</div>

						<div className={"form-item"}>
							{/*{CCV}*/}
							<label htmlFor="cvvCode">Код CVV2:</label>
							<div className="user-name-input">
								<Field
									name={"cvvCode"}
									render={({field}) => (
										<MaskedInput
											{...field}
									id="cvvCode"
									name={"cvvCode"}
									mask={cvvMask}
									placeholder="XXX"
								/>
									)}
									/>
								<div className="error">
									<ErrorMessage name="cvvCode"/>
								</div>
							</div>
						</div>


						<div className={"form-item"}>
							{/*{TELEPHONE}*/}
							<label htmlFor="tel">Телефон:</label>
							<div className="user-name-input">
								<Field
									name={"tel"}
									render={({field}) => (
										<MaskedInput
											{...field}
											id="tel"
											name={"tel"}
											mask={telephone}
											placeholder="+380-ХХХ-ХХ-ХХ"
										/>
									)}
								/>
								<div className="error">
									<ErrorMessage name="tel"/>
								</div>
							</div>
						</div>

						
						<div className={"wrapper-btn"}>
							<Link to={'/thanks'}>
								<button type="submit"
								        className={"btn"}
								        disabled={!dirty || !isValid}
								>
									Оплатить
								</button>

							</Link>
						</div>

					</Form>
				)
			}}

		</Formik>

	</div>


)

export default Means;