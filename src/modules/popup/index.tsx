import { render } from 'solid-js/web';
import './index.css';
import Popup from './Popup';

render(Popup, document.getElementById('app-container') as HTMLElement);

if (module.hot) module.hot.accept();
