import "./transaction.css";
import { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import Loading from "../../loading/Loading";
import { URL } from "./../../../config";

const Transaction = ({ transaction }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const id = transaction.id[0];

  const onSubmited = (values, actions) => {
    if (
      Object.keys(values) == "withdraw" &&
      transaction.balance[0] < +Object.values(values)
    ) {
      setIsLoading(false);
      toast.error("Your Balance Is Insufficient");
    } else if (Object.keys(values) == "withdraw") {
      axios
        .put(
          `${URL}/accounts/${id}`,
          {
            current_balance: transaction.balance[0] - +Object.values(values),
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
        .catch(() => {
          setIsLoading(false);
          toast.error("Connection Failed");
        });
    } else {
      axios
        .put(
          `${URL}/accounts/${id}`,
          {
            current_balance: transaction.balance[0] + +Object.values(values),
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
        .catch(() => {
          setIsLoading(false);
          toast.error("Connection Failed");
        });
    }
  };

  return (
    <div>
      <ToastContainer />

      <Formik
        initialValues={{ [transaction.inputName]: 0 }}
        validationSchema={Yup.object().shape({
          [transaction.inputName]: Yup.number()
            .required()
            .integer()
            .positive()
            .min(1000),
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
                      htmlFor={transaction.inputName}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {transaction.name}
                    </label>
                    <Field
                      type="text"
                      id={transaction.inputName}
                      name={transaction.inputName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.current_balance}
                      className="create-account-input"
                    />
                    <ErrorMessage
                      className="error"
                      name={transaction.inputName}
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
                  {transaction.name}
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
