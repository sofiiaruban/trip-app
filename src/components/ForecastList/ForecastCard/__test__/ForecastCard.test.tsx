
import { render } from '@testing-library/react';
import ForecastCard from '../ForecastCard';
import { ForecastCardType } from '../../constants';

const commonProps = {
  date: '2024-02-18',
  iconSrc: 'mock-icon-src',
  iconName: 'mock-icon-name',
  degree: "25",
  children: <div>Mock children</div>,
  type: ForecastCardType.SMALL
};

test('ForecastCard matches snapshot', () => {

  const { container } = render(
   <ForecastCard {...commonProps} />
  )

  expect(container).toMatchSnapshot()
});
