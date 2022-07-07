import { Globalstyle } from './GlobalStyle';
import {AppBar} from './AppBar/AppBar'

export const App = () => {
  return (
    <div>
      <Globalstyle />
      <AppBar user={{
        username: 'Jack', isOnline: true, points: {
        total: 1000, required: 300,
      } }} />
    </div>
  );
};
