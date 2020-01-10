import React from 'react';
import { shallow } from 'enzyme';
import { CardList } from './CardList.tsx';

describe('The CardList component renders feed data', () => {
  it('Renders correctly', () => {
    const data = {
      clientName: 'Natwest',
      projectName: 'Women Mean Business',
      campaignID: '0',
      dueDate: { toISODate: () => {} },
    };
    shallow(<CardList feed={data} />);
  });
});
