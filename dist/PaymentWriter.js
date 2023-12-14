"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 76, to: 'Simon', notes: 'for design work' },
    { id: 2, amount: 43, to: 'Lukas', notes: 'for web dev work' },
    { id: 3, amount: 23, to: 'Jakob', notes: 'for web dev work' },
]);
paymentWriter.save('./data/paymentss.csv');
