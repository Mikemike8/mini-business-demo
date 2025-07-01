const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /.+\@.+\..+/i, // basic email regex validation
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    debtAmount: {
      type: Number,
      min: 0,
    },
    debtorCompanyName: {
      type: String,
      trim: true,
    },
    caseDescription: {
      type: String,
      required: true,
      trim: true,
    },
    urgencyLevel: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium',
    },
    hasSupportingDocumentation: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


const PdfDetails = mongoose.model('PdfDetails', contactSchema);

module.exports = PdfDetails;
