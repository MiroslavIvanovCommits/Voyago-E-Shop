import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-report-viewer',
	templateUrl: './report-viewer.component.html',
	styles: [`
		.trv-report-page,
		.layer > * {
			width: 100% !important;
		}
	`],
	encapsulation: ViewEncapsulation.None
})
export class ReportViewerComponent {
	viewerContainerStyle = {
		position: 'relative',
		width: '100%',
		height: '800px',
		['font-family']: 'ms sans serif'
	};
}
