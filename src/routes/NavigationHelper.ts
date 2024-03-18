import React from 'react';

const navigationRef = React.createRef() as any;
const isReadyRef = React.createRef() as any;

function getCurrentRouteName() {
  if (navigationRef.current) {
    return navigationRef.current.getCurrentRoute()?.name || '';
  }
}

function navigate(name: string, params: any = {}) {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

function replace(name: string, params: any = {}) {
  if (navigationRef.current) {
    navigationRef.current.replace(name, params);
  }
}

function reset(data: {
  index: number;
  routes: { name: string; params?: any }[];
}) {
  if (navigationRef.current) {
    navigationRef.current.reset(data);
  }
}

export default {
  navigationRef,
  isReadyRef,
  getCurrentRouteName,
  navigate,
  replace,
  reset,
};
