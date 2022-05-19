import { MatchData } from '../MatcgData.js';
import { MatchResult } from '../MatchResult.js';
import { Analyser } from '../Summary.js';

export class WinsAnalysis implements Analyser {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HOMEWIN) wins++;
      else if (match[2] === this.team && match[5] === MatchResult.AWAYWIN)
        wins++;
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
