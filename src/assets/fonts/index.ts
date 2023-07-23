import RobotoRegular from './Roboto-Regular.woff2';
import RobotoMedium from './Roboto-Medium.woff2';

export const fonts = [
  {
    '@font-face': {
      fontFamily: 'Roboto',
      src: `url('${RobotoRegular}') format("woff2")`,
      fontWeight: 400,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto',
      src: `url('${RobotoMedium}') format("woff2")`,
      fontWeight: 500,
      fontStyle: 'normal',
    },
  },
];
