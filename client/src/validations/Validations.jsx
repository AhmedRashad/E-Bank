import * as Yup from "yup";

export const CreateAccountSchema = Yup.object().shape({
  username: Yup.string().required("Name is Required"),

  email: Yup.string().email().required("Email is Required"),

  phone: Yup.string().length(11).required("Phone is Required"),

  work: Yup.string().required("Work is Required"),

  country: Yup.string().required("Country is Required"),

  id_government: Yup.string().length(14).required("ID Government is Required"),

  streetAddress: Yup.string().required("Street Address is Required"),

  city: Yup.string().required("City is Required"),

  stateProvince: Yup.string().required("State / Province is Required"),

  zipPostalCode: Yup.number()
    .required("Zip / Postal Code is Required")
    .positive()
    .integer(),

  birth_date: Yup.date().required("Birth Date is Required"),

  account_name: Yup.string().required("Account Name is Required"),

  account_number: Yup.number()
    .required("Account Number is Required")
    .positive()
    .integer(),

  current_balance: Yup.number()
    .required("Current Balance is Required")
    .positive()
    .integer()
    .min(1000),
});
