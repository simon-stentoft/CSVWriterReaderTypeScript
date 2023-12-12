import { appendFileSync, readFileSync } from "fs"

export class CSVWriter<T> {
	constructor(private columns: (keyof T)[]) {
		this.csv = this.columns.join(',') + '\n'
	}

	private csv: string

	save(filename: string): void {
		appendFileSync(filename, this.csv)
		this.csv = '\n'

		console.log('file saved to', filename)
	}

	addRows(values: T[]): void {
		let rows = values.map((v) => this.formatRow(v))

		this.csv += rows.join('\n')

		//console.log(this.csv)
	}

	private formatRow(value: T): string {
		return this.columns.map((col) => value[col]).join(',')
	}
}


function readCSVData(filename: string): void {
	const readData = readFileSync(filename, {
		encoding: "utf-8"
	})
	.split("\n")
	.map((row: string): string[] => {
		return row.split(",")
	})
	
	console.log(readData)
}

readCSVData("data/payments.csv")