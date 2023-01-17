import { Formik, FormikErrors, FormikHelpers } from "formik"
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions"
import { auth, AuthResponseType } from "../../redux/reducers/profile.slice"
import { AppDispatch } from "../../redux/store"
import { ResponseType } from "../../types/types"

type FormValues = {
	login: string
	password: string
}

export const Auth = () => {
	const dispatch = useDispatch<AppDispatch>()

	const initialValues: FormValues = { login: '', password: '' }

	const validateHandler = (values: FormValues) => {
		const errors: FormikErrors<FormValues> = {}

		if (!values.login) {
			errors.login = 'Required login'
		}
		if (!values.password) {
			errors.password = 'Required password'
		}

		return errors
	}

	const responseHandler = ({ setSubmitting, setErrors, setStatus }: FormikHelpers<FormValues>) => (response: ResponseType<AuthResponseType>) => {
		if (response.status === 'success') {
			setStatus('Авторизация успешна');
			setTimeout(() => {
				dispatch(actions.setIsOpenedPopupAuth(false))
			}, 2000)
		} else {
			setErrors({login: response.errors[0].message})
		}
		setSubmitting(false)
	}

	const submitHandler = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
		dispatch(auth({login: values.login, password: values.password, callback: responseHandler(formikHelpers)}))
	}

	return (
		<Formik
			initialValues={initialValues}
			validate={validateHandler}
			onSubmit={submitHandler}
		>
			{({
				values,
				status,
				errors,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<form onSubmit={handleSubmit}>
					<div>
						{Object.keys(errors).map((key) => {
								//@ts-ignore
								return <div key={key}>{errors[key]}</div>
						})}
					</div>
					{status && <div className="text-success">{status}</div>}
					{!status &&
						<>
							<div>
								<input
									type="text"
									name="login"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.login}
								/>
							</div>
							<div>
								<input
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
							</div>
							<button type="submit" disabled={isSubmitting}>Войти</button>
						</>
					}
				</form>
			)}
		</Formik>
	)
}