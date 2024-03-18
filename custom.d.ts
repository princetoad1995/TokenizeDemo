declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'color' {
  const content: any;
  export default content;
}

declare module 'i18n' {
  const content: any;
  export default content;
}

declare module 'react-native-vector-icons' {
  export function createIconSetFromIcoMoon(
    config: any,
    iconName: string,
    iconFont: string,
  ): any;
}

declare module 'react-native-config' {
  const content: any;
  export default content;
}
