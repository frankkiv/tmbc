import React from 'react';
import { render } from '@testing-library/react';

import ExternalApi from './external-api';

describe('ExternalApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExternalApi />);
    expect(baseElement).toBeTruthy();
  });
});
