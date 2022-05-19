import { MatchResult } from '../MatchResult.js';
export class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HOMEWIN)
                wins++;
            else if (match[2] === this.team && match[5] === MatchResult.AWAYWIN)
                wins++;
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
