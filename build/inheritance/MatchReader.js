import { CsvFileReader } from './CsvFileReader.js';
import { dateStringToDate } from '../utils';
export class MatchReader extends CsvFileReader {
    mapRow(row) {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
