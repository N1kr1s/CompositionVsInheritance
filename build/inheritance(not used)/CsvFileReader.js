//importing from node filesystem(fs).readFileSync
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
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
