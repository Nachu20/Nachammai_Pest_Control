const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (example using Mongoose)
mongoose.connect('mongodb://127.0.0.1:27017/quotations');

// Define a Mongoose Schema for Quotation
const quotationSchema = new mongoose.Schema({
  clientName: String,
  clientAddress: String,
  clientEmail: String,
  serviceType: String,
  selectedServices: Array,
  totalAmount: Number,
});

const Quotation = mongoose.model('Quotation', quotationSchema);

// Function to append data to an Excel sheet
const saveQuotationToExcel = (data) => {
  const filePath = path.join(__dirname, 'quotations.xlsx');
  
  // Check if the file exists
  let workbook;
  if (fs.existsSync(filePath)) {
    // Read the existing workbook
    workbook = xlsx.readFile(filePath);
  } else {
    // Create a new workbook if it doesn't exist
    workbook = xlsx.utils.book_new();
  }

  // Check if the "Quotations" sheet exists
  let worksheet = workbook.Sheets['Quotations'];
  if (!worksheet) {
    // Create a new worksheet if it doesn't exist
    worksheet = xlsx.utils.json_to_sheet([]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Quotations');
  }

  // Get the existing data from the sheet
  const jsonData = xlsx.utils.sheet_to_json(worksheet);

  // Add new data to the existing data
  jsonData.push(data);

  // Convert back to worksheet and update the workbook
  const newWorksheet = xlsx.utils.json_to_sheet(jsonData);
  workbook.Sheets['Quotations'] = newWorksheet;

  // Write the updated workbook to the file
  xlsx.writeFile(workbook, filePath);
};

// POST route to handle form submission
app.post('/api/quotations', async (req, res) => {
  try {
    const newQuotation = new Quotation(req.body);
    await newQuotation.save();

    // Save the same data to Excel
    saveQuotationToExcel(req.body);

    res.status(200).send('Quotation saved successfully');
  } catch (error) {
    res.status(500).send('Error saving quotation');
  }
});

// app.get('/api/clients', async (req, res) => {
//   let info = await Quotation.find({});
//   console.log('All Quotations Fetched');
//   res.send(info);
// });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
