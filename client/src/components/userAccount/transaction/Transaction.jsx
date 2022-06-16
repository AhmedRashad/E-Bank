import "./transaction.css";
import { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import Loading from "../../loading/Loading";
import { URL } from "./../../../config";

const Transaction = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { accounts, name, inputName } = props;

  const navigate = useNavigate();
  const transaction = accounts[0];
  const id = transaction._id;

  const onSubmited = (values, actions) => {
    console.log(values);
    if (
      Object.keys(name) == "withdraw" &&
      transaction.balance < +Object.values(values)
    ) {
      setIsLoading(false);
      toast.error("Your Balance Is Insufficient");
    } else if (Object.keys(values) == "withdraw") {
      axios
        .put(
          `${URL}/accounts/charge/${id}`,
          {
            amount: +Object.values(values),
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {
          actions.resetForm();
          setIsLoading(false);
          toast.success("Withdraw Saved");
          navigate("/user/dashboard");
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.response.data.message);
        });
    } else {
      axios
        .put(
          `${URL}/accounts/deposit/${id}`,
          {
            amount: +Object.values(values),
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {
          actions.resetForm();
          setIsLoading(false);
          toast.success("Recharging Saved");
          navigate("/user/dashboard");
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.response.data.message);
        });
    }
  };

  return (
    <div>
      <ToastContainer />

      <Formik
        initialValues={{ [inputName]: 0 }}
        validationSchema={Yup.object().shape({
          [inputName]: Yup.number().required().integer().positive().min(1000),
        })}
        onSubmit={(values, actions) => {
          setIsLoading(true);

          onSubmited(values, actions);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            {isLoading && <Loading />}
            <div
              className="shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]
                    overflow-hidden sm:rounded-md"
            >
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor={inputName}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {name}
                    </label>
                    <Field
                      type="text"
                      id={inputName}
                      name={inputName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.current_balance}
                      className="create-account-input"
                    />
                    <ErrorMessage
                      className="error"
                      name={inputName}
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
                  {name}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Transaction;
