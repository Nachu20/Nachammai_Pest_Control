import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Quotation = () => {
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [serviceType, setServiceType] = useState("commercial");
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState(null); // For error handling
  const [successMessage, setSuccessMessage] = useState(null); // For success feedback
  const pdfRef = useRef(); // Reference for the PDF content
  const navigate = useNavigate(); // Initialize navigate

  const rates = {
    commercial: {
      termite: 8,
      rodent: 2,
      cockroach: 3,
    },
    residential: {
      termite: 6,
      rodent: 1,
      cockroach: 2,
    },
  };

  const handleServiceChange = (e, pestService) => {
    const isChecked = e.target.checked;
    const updatedServices = isChecked
      ? [...selectedServices, { name: pestService, sqft: 0 }]
      : selectedServices.filter((service) => service.name !== pestService);

    setSelectedServices(updatedServices);
  };

  const handleSqftChange = (index, value) => {
    const updatedServices = [...selectedServices];
    updatedServices[index].sqft = value;

    setTotalAmount(
      updatedServices.reduce((sum, service) => {
        const serviceRate = rates[serviceType][service.name];
        return sum + serviceRate * (service.sqft || 0);
      }, 0)
    );

    setSelectedServices(updatedServices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      clientName,
      clientAddress,
      clientEmail,
      serviceType,
      selectedServices,
      totalAmount,
    };

    try {
      // Clear any previous error messages
      setError(null);
      setSuccessMessage(null);

      // Post the form data to the backend
      await axios.post("http://localhost:5000/api/quotations", formData);
      setSuccessMessage("Quotation saved successfully");

      // Generate PDF after successful submission
      const pdfElement = pdfRef.current;
      html2pdf().from(pdfElement).save("quotation.pdf");

      // Reset form fields
      setClientName("");
      setClientAddress("");
      setClientEmail("");
      setServiceType("commercial");
      setSelectedServices([]);
      setTotalAmount(0);
    } catch (err) {
      console.error("Error submitting form: ", err);
      setError("There was a problem saving the quotation. Please try again.");
    }
  };

  const handleClose = () => {
    navigate("/"); // Navigate back to home when closing the modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleClose}></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative p-8 md:p-20 bg-white rounded-lg shadow-lg z-50 max-w-4xl w-full overflow-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-black font-bold hover:text-gray-800"
        >
          &#10005;
        </button>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 p-6 rounded-lg shadow-md w-full"
        >
          <h1 className="text-2xl text-center font-bold text-[#18311c] mb-4">
            Quotation Form
          </h1>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <div className="mb-4">
            <label className="block text-sm font-bold text-[#18311c]">
              Client Name:
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-[#18311c]">
              Client Email:
            </label>
            <input
              type="text"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-[#18311c]">
              Client Address:
            </label>
            <input
              type="text"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-[#18311c]">
              Service Type:
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-[#18311c]">
              Pest Services:
            </label>
            {Object.keys(rates[serviceType]).map((service) => (
              <div key={service} className="flex items-center mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={(e) => handleServiceChange(e, service)}
                    className="mr-2 text"
                  />
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </label>
                {selectedServices.find((s) => s.name === service) && (
                  <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    type="number"
                    placeholder="SQFT"
                    onChange={(e) =>
                      handleSqftChange(
                        selectedServices.findIndex((s) => s.name === service),
                        e.target.value
                      )
                    }
                    required
                    className="ml-4 p-2 border border-gray-300 rounded w-1/3 focus:outline-none focus:ring focus:border-blue-300"
                  />
                )}
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-[#172e1c] text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Generate Quotation
          </motion.button>
        </motion.form>

        {/* Hidden PDF content section */}
        <div style={{ display: "none" }}>
          <div
            ref={pdfRef}
            className="p-6 bg-white shadow-md"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <h1 className="text-2xl font-bold text-center mb-4">Quotation</h1>
            <div className="flex justify-between mb-4">
              <div>
                <img
                  src="/images/logo.png"
                  alt="Nachammai Pest Control Logo"
                  className="h-32"
                />
              </div>
              <div className="text-right">
                Quotation Date: {new Date().toLocaleDateString("en-GB")}
              </div>
            </div>

            <div className="border border-gray-300 p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-300 p-4">
                  <strong>Quotation By:</strong>
                  <br />
                  Nachammai Pest Control
                  <br />
                  nachammaipestservice@gmail.com
                  <br />
                  Kattupakkam, Chennai - 600056
                  <br />
                </div>

                <div className="border border-gray-300 p-4">
                  <strong>Quotation To:</strong>
                  <br />
                  Client Name: {clientName}
                  <br />
                  Client Email: {clientEmail}
                  <br />
                  Client Address: {clientAddress}
                  <br />
                </div>
              </div>

              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      Service
                    </th>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      SQFT
                    </th>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      Rate
                    </th>
                    <th className="border border-gray-300 p-2 bg-gray-200">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedServices.map((service) => (
                    <tr key={service.name}>
                      <td className="border border-gray-300 p-2">
                        {service.name}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {service.sqft}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {rates[serviceType][service.name]}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {rates[serviceType][service.name] * service.sqft}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="font-bold">Total Amount: {totalAmount}</div>
              <div>
                For any inquiries, email us at{" "}
                <a
                  href="mailto:nachammaipestservice@gmail.com"
                  className="text-blue-600"
                >
                  nachammaipestservice@gmail.com
                </a>{" "}
                or call us at +91 97911 71377
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Quotation;
