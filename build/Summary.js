import { WinsAnalysis } from './analyzers/WinsAnalysis.js';
import { HtmlReport } from './reportTargets/HtmlReport.js';
export class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
