import { appendFileSync, existsSync, readFileSync } from "fs"

export class CSVWriter<T> {
	
	constructor(private columns: (keyof T)[]) {
		this.csv = ''
	}
	private csv: string
	save(filename: string): void {
		if (!existsSync(filename)) {
			this.csv = this.columns.join(',') + '\n' + this.csv
		}
		appendFileSync(filename, this.csv)
		this.csv = ''

		console.log('file saved to', filename)
	}
	addRows(values: T[]): void {
		let rows = values.map((v) => this.formatRow(v))
		this.csv += rows.join('\n') + '\n'
	}
	private formatRow(value: T): string {
		return this.columns.map((col) => value[col]).join(',')
	}
}

function readCSVData(filename: string): void {
	const startTime = performance.now()

	const readData = readFileSync(filename, {
		encoding: "utf-8"
	})
	.split("\n")
	.map((row: string): string[] => {
		return row.split(",")
	})
	
	//console.log('First 10 rows:', readData.slice(0, 10));
	console.log('Total rows:', readData.length);

	const endTime = performance.now()
	const elapsedTime = endTime - startTime

	console.log(`Elapsed time: ${elapsedTime} milliseconds`)
}

readCSVData("data/SampleCSVFile.csv")