const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema(
    {
        orderID: {
            type: mongoose.Types.ObjectId,
            ref: 'Order',
            required: true,
        },
        method: { type: String, required: true },
        status: { type: Boolean, default: 0 },
        dueDate: { type: Date },
    },
    { timestamps: true }
)

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema)

module.exports = InvoiceModel
