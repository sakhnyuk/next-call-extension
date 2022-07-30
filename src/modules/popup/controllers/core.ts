import { identityService } from 'services';
import { createStore, SetStoreFunction } from 'solid-js/store';

interface IState {
  isLoading: boolean;
  authenticated: boolean;
  token?: string;
  email?: string;
  userId?: string;
}

const initialState: IState = {
  isLoading: true,
  authenticated: false,
};

class CoreController {
  private setState: SetStoreFunction<IState>;
  public state: IState;

  constructor() {
    const [state, setState] = createStore<IState>(initialState);
    this.state = state;
    this.setState = setState;
  }

  initApp = async () => {
    const authenticated = await identityService.checkAccess();
    this.getUserInfo();

    this.setState({ authenticated, isLoading: false });
  };

  getUserInfo = async () => {
    const userInfo = await identityService.getUserInfo();
    this.setState({ userId: userInfo.id, email: userInfo.email });
  };

  authUser = async () => {
    try {
      const token = await identityService.authUser();
      this.setState({ token, authenticated: true });
    } catch (error) {}
  };

  logoutUser = async () => {
    try {
      await identityService.logoutUser();
      this.setState({ token: undefined, authenticated: false });
    } catch (error) {}
  };
}

export const coreController = new CoreController();
