// ✅ server.js
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// ✅ Make sure this matches your model file name
const PDFDetails = require('./models/PdfDetails');

const app = express();
const PORT = process.env.PORT || 5010;

// ✅ Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Static files if needed
app.use('/files', express.static('files'));

// ✅ CORS setup
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// ✅ MongoDB connection
const mongoUrl = process.env.MONGO_URL || "mongodb+srv://mike96:lilmike800@cluster0.ylle5px.mongodb.net/ReesorEmaildata?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

// Assuming you imported the model correctly:
// const Contact = require('./models/Contact');
app.post('/api/contact', async (req, res) => {
  console.log("Request Body:", req.body);

  try {
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      companyName,
      title,
      debtAmount,
      debtorCompanyName,
      caseDescription,
      urgencyLevel,
      hasSupportingDocumentation,
    } = req.body;

    // Use PDFDetails here instead of Contact
    const newContact = new PDFDetails({
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      companyName,
      title,
      debtAmount,
      debtorCompanyName,
      caseDescription,
      urgencyLevel,
      hasSupportingDocumentation,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      data: newContact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
});


// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/api/contact`);
});
