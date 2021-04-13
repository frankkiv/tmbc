import React from 'react';
import { render } from '@testing-library/react';

import StatRanking from './stat-ranking';

describe('StatRanking', () => {
  it('should render successfully without id', () => {
    const { baseElement, getByText } = render(<StatRanking />);
    expect(baseElement).toBeTruthy();
    expect(getByText(/Welcome to StatRanking! no id/i));
  });
  it('should render successfully with id string', () => {
    const { baseElement, getByText } = render(<StatRanking id='string'/>);
    expect(baseElement).toBeTruthy();
    expect(getByText(/Welcome to StatRanking! string/i));
  });
});
