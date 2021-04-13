/**
 * 1. Mock the return value of useParams
 * 2. Check the display is as expected
 * Downsides: mocks in Jest are hoisted, this makes it difficult to override our mock for a single test.
 * A Decoupled Solution: https://tomalexhughes.com/blog/testing-components-that-use-react-router-hooks
 */

import React from 'react';
import { render } from '@testing-library/react';
import Team from './team';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({id: 'ID'}),
}));

describe('Team', () => {
  it('should render successfully with the string ID', () => {
    const { baseElement, getByText } = render(<Team />);
    expect(baseElement).toBeTruthy();
    getByText(/Welcome to Team ID!/i);
  });
});
