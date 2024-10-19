const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors({
  origin: ["https://nachammai-pest-control.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());

const saveQuotationToExcel = (data) => {
  const filePath = path.join(__dirname, 'quotations.xlsx');
  let workbook;

  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
  } else {
    workbook = xlsx.utils.book_new();
  }

  let worksheet = workbook.Sheets['Quotations'];
  if (!worksheet) {
    worksheet = xlsx.utils.json_to_sheet([]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Quotations');
  }

  const jsonData = xlsx.utils.sheet_to_json(worksheet);
  jsonData.push(data);
  const newWorksheet = xlsx.utils.json_to_sheet(jsonData);
  workbook.Sheets['Quotations'] = newWorksheet;
  xlsx.writeFile(workbook, filePath);
};

app.get('/fgf', (req, res) => {
  res.send("Hellllooo.........");
});

app.post('/api/quotations', async (req, res) => {
  try {
    saveQuotationToExcel(req.body);
    res.status(200).send('Quotation saved successfully');
  } catch (error) {
    res.status(500).send('Error saving quotation');
  }
});

module.exports = app;
