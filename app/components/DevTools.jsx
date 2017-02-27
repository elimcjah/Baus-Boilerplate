import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-m'
    defaultPosition='bottom'
    defaultIsVisible={false} >
    <LogMonitor theme='solarized' />
  </DockMonitor>
);

export default DevTools;
