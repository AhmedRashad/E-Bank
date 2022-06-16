import "./transferMoney.css";

import { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Loading from "../../loading/Loading";
import { URL } from "../../../config";

const TransferMoney = ({ accounts }) => {
  const [isLoading, setIsLoading] = useState(false);

  const current_balance = accounts[0].current_balance;

  const navigate = useNavigate();

  const id = useParams().id;

  const onSubmited = (values, actions) => {
    console.log(+values.amount);
    console.log(current_balance);

    if (current_balance < +values.ammount) {
      setIsLoading(false);
      toast.error("Your Balance Is Insufficient");
    } else {
      axios
        .put(
          `${URL}/accounts/transfer/${id}`,
          {
            amount: +values.amount,
            account_number: values.account_number,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {
          actions.resetForm();
          setIsLoading(false);
          toast.success("Money Transferred");
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
        initialValues={{ amount: 0, account_number: "" }}
        validationSchema={Yup.object().shape({
          amount: Yup.number().required().integer().positive().min(1000),
          account_number: Yup.string().required(),
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
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="col">
                    <label
                      htmlFor="account_number"
                      className="block text-lg font-medium text-gray-700"
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
                  <div className="col">
                    <label
                      htmlFor="amount"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Amount
                    </label>
                    <Field
                      type="text"
                      id="amount"
                      name="amount"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.amount}
                      className="create-account-input"
                    />
                    <ErrorMessage
                      className="error"
                      name="amount"
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
                  Transfer
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TransferMoney;
