import { AppFrame } from './App.styles';
import NavigationBar from './components/NavigationBar/NavigationBar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppFrame>
      <NavigationBar />
      {children}
    </AppFrame>
  );
}

export default Layout;
