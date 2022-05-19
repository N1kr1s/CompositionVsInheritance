//importing from node filesystem(fs).readFileSync for parsing data from .csv->file
import fs from 'fs';
export class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map((row) => row.split(','));
    }
}
