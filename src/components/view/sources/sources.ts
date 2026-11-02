import './sources.css';
import { Source } from '../../../types';

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            itemName.textContent = item.name;

            const itemElement = sourceClone.querySelector('.source__item') as HTMLElement;
            itemElement.setAttribute('data-source-id', item.id || '');

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources') as HTMLElement;
        sourcesContainer.append(fragment);
    }
}

export default Sources;
