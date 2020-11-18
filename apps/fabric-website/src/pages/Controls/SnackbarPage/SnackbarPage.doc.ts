import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SnackbarPage/docs/SnackbarRelated.md') as string;
const componentUrl =
  'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Controls/SnackbarPage';

export const SnackbarPageProps: TFabricPlatformPageProps = {
  android: {
    title: 'Snackbar',
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SnackbarPage/docs/android/SnackbarOverview.md') as string,
    related,
    componentUrl,
  },
};