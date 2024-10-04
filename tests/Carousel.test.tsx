import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Carousel from '../src/components/Carousel/Carousel'; // Ruta del componente

const announcementsMock = [
  {
    backgroundColor: '#ff0000',
    intro: 'Intro 1',
    message: 'Message 1',
    ctaLabel: 'Click Here 1',
    ctaUrl: '/link1',
    __typename: 'typename',
  },
  {
    backgroundColor: '#00ff00',
    intro: 'Intro 2',
    message: 'Message 2',
    ctaLabel: 'Click Here 2',
    ctaUrl: '/link2',
    __typename: 'typename',
  },
];

describe('Carousel', () => {
  test('renders the first announcement correctly', () => {
    const {getByText} = render(<Carousel announcements={announcementsMock} />);

    expect(getByText('Intro 1')).toBeTruthy();
    expect(getByText('Message 1')).toBeTruthy();
    expect(getByText('Click Here 1')).toBeTruthy();
  });

  test('navigates to the next announcement when the button is pressed', () => {
    const {getByText, getByLabelText} = render(
      <Carousel announcements={announcementsMock} />,
    );

    expect(getByText('Intro 1')).toBeTruthy();

    const nextButton = getByLabelText('Next Slide');
    fireEvent.press(nextButton);

    expect(getByText('Intro 2')).toBeTruthy();

    const previousButton = getByLabelText('Previous Slide');
    fireEvent.press(previousButton);

    expect(getByText('Intro 1')).toBeTruthy();
  });
});
