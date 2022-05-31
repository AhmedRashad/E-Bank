import "./createAccount.css";
import { useState } from "react";

const CreateAccount = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    work: "",
    country: "",
    personalId: "",
    dateOfBirth: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    zipPostalCode: "",
    accountName: "",
    accountNumber: "",
    currentBalance: "",
  });
  const {
    name,
    email,
    phone,
    age,
    work,
    country,
    personalId,
    dateOfBirth,
    streetAddress,
    city,
    stateProvince,
    zipPostalCode,
    accountName,
    accountNumber,
    currentBalance,
  } = formdata;

  const onChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formdata);
  };

  return (
    <>
      <div className="p-4 xl:px-52">
        <form onSubmit={handleSubmit}>
          <div className="py-4 sm:px-0">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Personal Information
            </h3>
          </div>
          <div
            className="shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
            overflow-hidden sm:rounded-md"
          >
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={age}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="personalId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Personal ID
                  </label>
                  <input
                    type="text"
                    id="personalId"
                    name="personalId"
                    value={personalId}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date Of Birth
                  </label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="work"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Work
                  </label>
                  <input
                    type="text"
                    id="work"
                    name="work"
                    value={work}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="streetAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={streetAddress}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="stateProvince"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    id="stateProvince"
                    name="stateProvince"
                    value={stateProvince}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="zipPostalCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    id="zipPostalCode"
                    name="zipPostalCode"
                    value={zipPostalCode}
                    onChange={onChange}
                    className="input"
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
            className="shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
              overflow-hidden sm:rounded-md"
          >
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="accountName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Name
                  </label>
                  <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={accountName}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="currentBalance"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current Balance
                  </label>
                  <input
                    type="text"
                    id="currentBalance"
                    name="currentBalance"
                    value={currentBalance}
                    onChange={onChange}
                    className="input"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="accountNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={onChange}
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="btn">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
