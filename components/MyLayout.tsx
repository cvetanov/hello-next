import Header from './Header';
import { ReactNode } from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = ({ children }: { children: ReactNode }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
