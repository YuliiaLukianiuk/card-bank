// import React from "react";
// import {Formik, Form, Field, ErrorMessage} from 'formik';
// import * as Yup from 'yup';
// import MaskedInput from 'react-text-mask'
// // import InputMask from 'react-input-mask'
// import "./Mean.css";
// const phoneNumberMask = [
// 	/\d/,
// 	/\d/,
// 	/\d/,
// 	/\d/,
// 	"-",
// 	/\d/,
// 	/\d/,
// 	/\d/,
// 	/\d/,
// 	"-",
// 	/\d/,
// 	/\d/,
// 	/\d/,
// 	/\d/,
// 	"-",
// 	/\d/,
// 	/\d/,
// 	/\d/,
// 	/\d/
// ];
//
//
// export const Mean = () => (
//
//
// 			// .min(3, 'Password must be at least 6 characters')
// 			// .required('1111111')
// 		// 	.test('is-full-name', 'Please enter both your first and last name', function(value) {
// 		// 		return(
// 		// 			value.length <= 2
// 		//
// 		// 		)
// 		//c
// 		// })
// 	 // });
//
//
// 	// const inputAttrs = {
// 	// 	maskChar: '',
// 	// 	className: 'test',
// 	// 	alwaysShowMask: true,
// 	// };
//
//
// 		<div className={"outside-wrap-form"}>
//
// 			<Formik
//
//
// 				initialValues={{cardNumber: ""}}
// 			        validationSchema={Yup.object({
// 				cardNumber: Yup.string()
// 					.required("This field is required")
// 					.transform(value => value.replace(/[^\d]/g, ''))
// 					.min(3, "Please enter a name more than 1 character")
//
// 			})}
//
// 			>
// 				{props => {
// 					const {
// 						touched,
// 						errors,
// 						handleChange,
// 						handleBlur,
// 						isSubmitting,
// 						handleSubmit,
// 					} = props;
// 					return (
//
// 						<Form className={"form-wrap"} onSubmit={handleSubmit}>
//
// 							<div className={"form-item"}>
// 								{/*CARD NUMBER*/}
// 								<label htmlFor="cardNumber">Номер карти:</label>
// 								<div className="user-name-input">
// 									<Field
// 										name="cardNumber"
// 										render={({field}) => (
// 											<MaskedInput
// 												{...field}
// 												// mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
// 												mask={phoneNumberMask}
// 												id="cardNumber"
// 												placeholder="XXXX-XXXX-XXXX-XXXX"
// 												onChange={handleChange}
// 	// 	maskChar: '',
// 	// 	className: 'test',
// 	// 	alwaysShowMask: true,
// 												// className={'form-control' + (errors.cardNumber && touched.cardNumber ? ' is-invalid' : '')}
// 											/>
// 										)}
// 									/>
// 									<div className="error">
// 										<ErrorMessage name="cardNumber"
// 										/>
// 									</div>
// 									<div className={"wrapper-btn"}>
// 										<button type="submit" className={"btn"}>
// 											Оплатить
// 										</button>
// 									</div>
//
// 								</div>
// 							</div>
//
// 						</Form>
// 					)
// 				}}
// 			</Formik>
// 		</div>
//
// )
// export default Mean;
//
//
// // import React from "react";
// // import {Formik, Form,Field, ErrorMessage} from 'formik';
// // import * as Yup from 'yup';
// // import MaskedInput from 'react-text-mask'
// //
// // class Mean extends React.Component {
// // 	phoneNumberMask = [
// // 		/\d/,
// // 		/\d/,
// // 		/\d/,
// // 		/\d/,
// // 		"-",
// // 		/\d/,
// // 		/\d/,
// // 		/\d/,
// // 		/\d/,
// // 		"-",
// // 		/\d/,
// // 		/\d/,
// // 		/\d/,
// // 		/\d/,
// // 		"-",
// // 		/\d/,
// // 		/\d/,
// // 		/\d/,
// // 		/\d/
// // 	];
// //
// // 	render() {
// //
// // 		return (
// //
// // 			<Formik
// // 				initialValues={{
// //
// // 					password: '',
// //
// // 				}}
// // 				validationSchema={Yup.object().shape({
// // 					password: Yup.string()
// // 						.min(2, 'Password must be at least 6 characters')
// // 						.required('Password is required'),
// // 				})}
// // 				onSubmit={fields => {
// // 					alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
// // 				}}
// // 				render={({ errors, status, touched }) => (
// // 					<Form>
// // 						<div className="form-group">
// // 							<label htmlFor="cardNumber">Password</label>
// //
// // 							<Field name="cardNumber"
// // 							             // id="cardNumber"
// // 							             placeholder="XXXX-XXXX-XXXX-XXXX"
// // 							             // mask=phoneNumberMask
// // 							             type="text"
// // 							             className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
// // 							<ErrorMessage name="password" component="div" className="invalid-feedback" />
// // 						</div>
// // 							<button type="submit" className="btn btn-primary mr-2">Register</button>
// // 							{/*<button type="reset" className="btn btn-secondary">Reset</button>*/}
// //
// // 					</Form>
// // 				)}
// // 			/>
// // 		)
// // 	}
// // }
// //
// // export default Mean;
// //
// // import React from "react";
// // import { render } from "react-dom";
// // import {Formik, Field, Form} from "formik";
// // import * as Yup from "yup";
// // import MaskedInput from "react-text-mask";
// //
// // const phoneNumberMask = [
// // 	"(",
// // 	/[1-9]/,
// // 	/\d/,
// // 	/\d/,
// // 	")",
// // 	" ",
// // 	/\d/,
// // 	/\d/,
// // 	/\d/,
// // 	"-",
// // 	/\d/,
// // 	/\d/,
// // 	/\d/,
// // 	/\d/
// // ];
// //
// // const Mean = () => (
// // 	<div className="app">
// //
// // 		<Formik
// // 			initialValues={{ phone: "" }}
// // 			onSubmit={(values, { setSubmitting }) => {
// // 				setTimeout(() => {
// // 					alert(JSON.stringify(values, null, 2));
// // 					setSubmitting(false);
// // 				}, 500);
// // 			}}
// // 			validationSchema={Yup.object().shape({
// // 				phone: Yup.string().min(6,"Required")
// // 			})}
// // 		>
// // 			{props => {
// // 				const {
// // 					values,
// // 					touched,
// // 					errors,
// // 					dirty,
// // 					isSubmitting,
// // 					handleChange,
// // 					handleBlur,
// // 					handleSubmit,
// // 					handleReset
// // 				} = props;
// // 				return (
// //
// // 					<Form onSubmit={handleSubmit}>
// // 						<label htmlFor="phone" style={{ display: "block" }}>
// // 							Phone Number
// // 						</label>
// //
// // 						<Field
// // 							name="phone"
// // 							render={({ field }) => (
// // 								<MaskedInput
// // 									{...field}
// // 									mask={phoneNumberMask}
// // 									id="phone"
// // 									placeholder="Enter your phone number"
// // 									type="text"
// // 									onChange={handleChange}
// // 									onBlur={handleBlur}
// // 									className={
// // 										errors.phone && touched.phone
// // 											? "text-input error"
// // 											: "text-input"
// // 									}
// // 								/>
// // 							)}
// // 						/>
// //
// // 						{errors.phone && touched.phone && (
// // 							<div className="input-feedback">{errors.phone}</div>
// // 						)}
// //
// // 						<button
// // 							type="button"
// // 							className="outline"
// // 							onClick={handleReset}
// // 							disabled={!dirty || isSubmitting}
// // 						>
// // 							Reset
// // 						</button>
// // 						<button type="submit" disabled={isSubmitting}>
// // 							Submit
// // 						</button>
// //
// // 					</Form>
// // 				);
// // 			}}
// // 		</Formik>
// //
// // 	</div>
// // );
// //
// // export default Mean;