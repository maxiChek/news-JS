import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsApiResponse, SourcesApiResponse } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesContainer = document.querySelector('.sources') as HTMLElement;

        sourcesContainer.addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data as NewsApiResponse))
        );

        this.controller.getSources((data) => this.view.drawSources(data as SourcesApiResponse));
    }
}

export default App;
