import { onMount } from 'solid-js';
import { gapi } from '../../gapi';
import { storageService } from '../../services/StorageService';
import { coreController } from './controllers';
import './Popup.css';

const Popup = () => {
  onMount(() => {
    coreController.initUser();
  });

  const handleCalendarsLoad = async () => {
    const calendars = await gapi.getCalendars();
    gapi.getEvents();

    console.log(calendars);
    await storageService.setCalendars(calendars);
  };

  const handleGetCalendarsFromStorage = async () => {
    const calendars = await storageService.getCalendars();

    console.log(calendars);
  };

  return (
    <div class="App">
      <header>Next Call App</header>

      <p>Here we will put the calendar events</p>

      {coreController.state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={handleCalendarsLoad}>Load Calendars</button>
          <button onClick={handleGetCalendarsFromStorage}>
            Load Calendars from storage
          </button>
        </>
      )}
    </div>
  );
};

export default Popup;
