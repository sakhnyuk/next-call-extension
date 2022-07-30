import { onMount } from 'solid-js';
import { coreController } from './controllers';
import './Popup.css';

const Popup = () => {
  onMount(() => {
    coreController.initApp();
  });

  return (
    <div class="App">
      <header>Next Call App</header>

      <p>Here we will put the calendar events</p>
    </div>
  );
};

export default Popup;
