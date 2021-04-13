/**
 *  1. Mock UItheme just return the children component
 *  2. Use render with router to mock the current url
 *  3. Mock the current url and check the display component
 */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

jest.mock('@tmbc/ui/theme', () => ({
  UiTheme: ({ children }) => <> {children} </>,
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('full app rendering/navigating', () => {
    const { getByText } = renderWithRouter(<App />);

    // verify page content for expected route
    expect(getByText(/This is Home Page/i));
  });
});

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};
