import { CSVWriter } from "./index"

interface Payment {
	id: number
	amount: number
	to: string
	notes: string
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
	{ id: 1, amount: 76, to: 'Simon', notes: 'for design work' },
	{ id: 2, amount: 43, to: 'Lukas', notes: 'for web dev work' },
    { id: 3, amount: 23, to: 'Jakob', notes: 'for web dev work' },
])

paymentWriter.save('./data/paymentss.csv')


