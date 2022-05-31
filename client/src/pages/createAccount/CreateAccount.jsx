import "./createAccount.css";
import { useState } from "react";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [work, setWork] = useState("");
  const [country, setCountry] = useState("");
  const [personalId, setPersonalId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [zipPostalCode, setZipPostalCode] = useState("");

  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      age: e.target.age.value,
      work: e.target.work.value,
      country: e.target.country.value,
      personalId: e.target.personalId.value,
      dateOfBirth: e.target.dateOfBirth.value,
      streetAddress: e.target.streetAddress.value,
      city: e.target.city.value,
      stateProvince: e.target.stateProvince.value,
      zipPostalCode: e.target.zipPostalCode.value,
      accountName: e.target.accountName.value,
      accountNumber: e.target.accountName.value,
      currentBalance: e.target.currentBalance.value,
    };

    console.log(data);
  };

  return (
    <>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="py-4 sm:px-0">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Personal Information
            </h3>
          </div>
          <div className="shadow overflow-hidden sm:rounded-md">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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
                    value={personalId}
                    onChange={(e) => setPersonalId(e.target.value)}
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
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
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
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
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
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                    value={stateProvince}
                    onChange={(e) => setStateProvince(e.target.value)}
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
                    value={zipPostalCode}
                    onChange={(e) => setZipPostalCode(e.target.value)}
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
          <div className="shadow overflow-hidden sm:rounded-md">
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
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
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
                    value={currentBalance}
                    onChange={(e) => setCurrentBalance(e.target.value)}
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
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
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
