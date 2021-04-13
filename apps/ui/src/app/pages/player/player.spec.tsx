import React from 'react';
import { render } from '@testing-library/react';

import Player from './player';

xdescribe('Player', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Player />);
    expect(baseElement).toBeTruthy();
  });
});
