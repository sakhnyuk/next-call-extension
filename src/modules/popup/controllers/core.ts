import { createStore, SetStoreFunction } from 'solid-js/store';

interface IState {
  isLoading: boolean;
  token?: string;
  email?: string;
  userId?: string;
}

const initialState: IState = {
  isLoading: false,
};

class CoreController {
  private setState: SetStoreFunction<IState>;
  public state: IState;

  constructor() {
    const [state, setState] = createStore<IState>(initialState);
    this.state = state;
    this.setState = setState;
  }

  initUser = () => {
    this.setIsLoading(true);
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      this.setState({ token });
      this.getUserInfo();
      this.setIsLoading(false);
    });
  };

  getUserInfo = () => {
    chrome.identity.getProfileUserInfo((userInfo) => {
      this.setState({ userId: userInfo.id, email: userInfo.email });
    });
  };

  setIsLoading = (value: boolean) => {
    this.setState({ isLoading: value });
  };
}

export const coreController = new CoreController();
