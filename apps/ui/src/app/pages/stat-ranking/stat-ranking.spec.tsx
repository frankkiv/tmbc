import React from 'react';
import { render } from '@testing-library/react';

import StatRanking from './stat-ranking';

describe('StatRanking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StatRanking />);
    expect(baseElement).toBeTruthy();
  });
});
