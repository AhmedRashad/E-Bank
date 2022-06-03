import "./createAccount.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "../../features/account/accountSlice";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";

import { CreateAccountSchema } from "../../validations/Validations";
import { InitialValues } from "./InitialValues";

const CreateAccount = () => {
  const x = true;
  const dispactch = useDispatch();
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.account
  );

  // console.log("Mahmoud");
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  if (isLoading) {
    return (
      <svg
        role="status"
        className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    );
  }
  return (
    <>
      <div className="containerCreatAccount">
        <ToastContainer />
        <Formik
          initialValues={InitialValues}
          validationSchema={CreateAccountSchema}
          onSubmit={(values, actions) => {
            dispactch(addAccount(values));

            if (isSuccess) {
              toast.success("Data saved");
              actions.resetForm({ values: InitialValues });
            }
            if (isError) {
              console.log(message);
              toast.error("Connection Failed");
            }
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <div className="py-4 sm:px-0">
                <h3 className="text-lg font-bold leading-6 text-gray-900">
                  Personal Information
                </h3>
              </div>
              <div
                className="shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]
            overflow-hidden sm:rounded-md"
              >
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="username"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="email"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="phone"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="id_government"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ID Government
                      </label>
                      <Field
                        type="text"
                        id="id_government"
                        name="id_government"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.id_government}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="id_government"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="birth_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Birth Date
                      </label>
                      <Field
                        type="date"
                        id="birth_date"
                        name="birth_date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.birth_date}
                        className="input birth_date"
                      />
                      <ErrorMessage
                        className="error"
                        name="birth_date"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="work"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Work
                      </label>
                      <Field
                        type="text"
                        id="work"
                        name="work"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.work}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="work"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <Field
                        type="text"
                        id="country"
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="country"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="streetAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <Field
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.streetAddress}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="streetAddress"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <Field
                        type="text"
                        id="city"
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="city"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="stateProvince"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <Field
                        type="text"
                        id="stateProvince"
                        name="stateProvince"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.stateProvince}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="stateProvince"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="zipPostalCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <Field
                        type="text"
                        id="zipPostalCode"
                        name="zipPostalCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.zipPostalCode}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="zipPostalCode"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 sm:px-0">
                <h3 className="text-lg font-bold leading-6 text-gray-900">
                  Account Information
                </h3>
              </div>
              <div
                className="shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]
              overflow-hidden sm:rounded-md"
              >
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="account_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Account Name
                      </label>
                      <Field
                        type="text"
                        id="account_name"
                        name="account_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.account_name}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="account_name"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="current_balance"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Current Balance
                      </label>
                      <Field
                        type="text"
                        id="current_balance"
                        name="current_balance"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.current_balance}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="current_balance"
                        component="div"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="account_number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Account Number
                      </label>
                      <Field
                        type="text"
                        id="account_number"
                        name="account_number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.account_number}
                        className="input"
                      />
                      <ErrorMessage
                        className="error"
                        name="account_number"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="btn bg-indigo-600">
                    Save
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateAccount;
