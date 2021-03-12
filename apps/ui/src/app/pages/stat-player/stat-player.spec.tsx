import React from 'react';
import { render } from '@testing-library/react';

import StatPlayer from './stat-player';

describe('StatPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StatPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
