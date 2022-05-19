import { CsvFileReader } from './CsvFileReader.js';
import { dateStringToDate } from './utils.js';
export class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    static fromCsv(filename) {
        return new MatchReader(new CsvFileReader(filename));
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
