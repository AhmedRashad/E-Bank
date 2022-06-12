import "./createAccount.css";
import { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { CreateAccountSchema } from "../../validations/Validations";
import { InitialValues } from "./InitialValues";
import Loading from "../../components/loading/Loading";
import { URL } from "../../config";

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="container lg:px-14 xl:px-36 2xl:px-44">
        <ToastContainer />
        <Formik
          initialValues={InitialValues}
          validationSchema={CreateAccountSchema}
          onSubmit={(values, actions) => {
            setIsLoading(true);

            axios
              .post(`${URL}/accounts`, values, {
                withCredentials: true,
              })
              .then(() => {
                actions.resetForm();
                setIsLoading(false);
                navigate("/user/dashboard");
              })
              .catch(() => {
                setIsLoading(false);
                toast.error("Connection Failed");
              });
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              {isLoading && <Loading />}
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input create-account-birth_date"
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
                        Current Job
                      </label>
                      <Field
                        type="text"
                        id="work"
                        name="work"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.work}
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                        className="create-account-input"
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
                  <button
                    type="submit"
                    className="create-account-btn bg-indigo-600"
                  >
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
