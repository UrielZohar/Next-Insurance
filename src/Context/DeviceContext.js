import { createContext } from 'react';

const DeviceContext = createContext({
  isMobile: false,
});

export default DeviceContext;