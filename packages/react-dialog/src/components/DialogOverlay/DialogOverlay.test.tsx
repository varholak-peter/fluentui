import * as React from 'react';
import { render } from '@testing-library/react';
import { DialogOverlay } from './DialogOverlay';
import { isConformant } from '../../common/isConformant';

describe('DialogOverlay', () => {
  isConformant({
    Component: DialogOverlay,
    displayName: 'DialogOverlay',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<DialogOverlay>Default DialogOverlay</DialogOverlay>);
    expect(result.container).toMatchSnapshot();
  });
});
