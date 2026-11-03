import AppLoader from './appLoader';
import { NewsApiResponse, SourcesApiResponse } from '../../types';

export type ApiResponse = NewsApiResponse | SourcesApiResponse;
export type Callback = (data: ApiResponse) => void;

class AppController extends AppLoader {
    getSources(callback: Callback): void {
        super.getResp<SourcesApiResponse>(
            {
                endpoint: 'sources',
            },
            callback as (data: SourcesApiResponse) => void
        );
    }

    getNews(e: MouseEvent, callback: Callback): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId || '');

                    super.getResp<NewsApiResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId || '',
                            },
                        },
                        callback as (data: NewsApiResponse) => void
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
