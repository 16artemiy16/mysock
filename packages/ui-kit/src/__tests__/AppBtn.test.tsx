import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import 'jest-styled-components'
import "@testing-library/jest-dom/extend-expect";

import { ThemeProvider } from 'styled-components';

import { AppBtn } from '../components';
import { theme } from '@mysock-front/application/src/styles/theme.styles';
import { AppBtnProps } from '../components/AppBtn/AppBtn';

const renderAppBtn = (props: AppBtnProps = {}, child?: string) => render(
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      <AppBtn {...props}>{child}</AppBtn>
    </MemoryRouter>
  </ThemeProvider>)

describe('AppBtn', () => {
  it('should render without props', () => {
    const { container } = renderAppBtn({}, 'Click');
    expect(container).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveTextContent('Click')
  });

  describe('disabled', () => {
    const renderAppBtnDisabled = () => renderAppBtn({ disabled: true });

    it('should render with correct styles', () => {
      const { container } = renderAppBtnDisabled();

      expect(container.firstChild).toMatchSnapshot();
      expectStyles(container.firstChild, { cursor: 'not-allowed', 'background-color': theme.colors.grayLight })
    });
  });

  describe('link', () => {
    const renderAppBtnLink = (props: AppBtnProps = {}) => renderAppBtn({ to: '/test', ...props });

    it('should render with correct styles', () => {
      const {container} = renderAppBtnLink();

      expect(container.firstChild).toMatchSnapshot();
      expectStyles(container.firstChild, { 'background-color': theme.colors.link })
    });
  })
});
