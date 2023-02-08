import { render } from '@testing-library/react';

import SharedBaseComponents from './shared-base-components';

describe('SharedBaseComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedBaseComponents />);
    expect(baseElement).toBeTruthy();
  });
});
