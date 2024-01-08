const fs = require('fs');

function createCSVWriter(filePath, data) {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        // If the file doesn't exist, append the headers and data
        let csvContent = data.map(e => e.join(",")).join("\n");
        fs.appendFile(filePath, csvContent + '\n', (err) => {
            if (err) {
                console.error('Something went wrong: ', err);
            } else {
                console.log('Data has been appended');
            }
        });
    } else {
        // If the file exists, append only the data (excluding headers). Uses slice() to remove the header row
        let csvContent = data.slice(1).map(e => e.join(",")).join("\n");
        fs.appendFile(filePath, csvContent + '\n', (err) => {
            if (err) {
                console.error('Something went wrong: ', err);
            } else {
                console.log('Data has been appended');
            }
        });
    }
}

let data = [
    ['Name', 'Age', 'Occupation'],
    ['John Doe', '30', 'Software Engineer'],
    ['Jane Smith', '28', 'Data Scientist'],
    ['Jim Brown', '35', 'Product Manager']
];

//createCSVWriter('data/SampleCSVFile.csv', data);

function readCSVData(fileName) {
    const startTime = performance.now()

    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
                //split the data into an array of arrays
                const dataArray = data.split('\n');
                //remove the first row (headers) using the shift() method
                dataArray.shift();
                //convert each row into an array
                data = dataArray.map(row => row.split(','));
                console.log(data.slice(0, 10))
                console.log(data.length)
            }
            const endTime = performance.now()
            const elapsedTime = endTime - startTime
        
            console.log(`Elapsed time: ${elapsedTime} milliseconds`)
        });
    });
}

readCSVData('data/SampleCSVFile.csv')
