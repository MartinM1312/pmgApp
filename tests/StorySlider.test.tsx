import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import StorySlider from '../src/components/StorySlider/StorySlider';

const slidesMock = [
  {
    mobileImageOrVideo: {
      contentType: 'video/mp4',
      url: 'https://example.com/video.mp4',
    },
    enableDarkBackdrop: true,
    eyebrowImage: 'https://example.com/image.svg',
    eyeBrowText: 'Eyebrow Test',
    title: 'Slide Title 1',
    targetUrl: '/link1',
  },
  {
    mobileImageOrVideo: {
      contentType: 'image/jpg',
      url: 'https://example.com/image.jpg',
    },
    enableDarkBackdrop: false,
    eyebrowImage: 'https://example.com/image2.svg',
    eyeBrowText: 'Eyebrow Test 2',
    title: 'Slide Title 2',
    targetUrl: '/link2',
  },
];

describe('StorySlider', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({}),
        headers: new Headers(),
        redirected: false,
        statusText: 'OK',
        type: 'basic',
        url: '',
        clone: jest.fn(),
        body: null,
        bodyUsed: false,
        arrayBuffer: jest.fn(),
        blob: jest.fn(),
        formData: jest.fn(),
        text: jest.fn(),
      }),
    ) as jest.Mock;
  });

  afterAll(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  test('renders the first slide correctly', () => {
    const {getByText} = render(<StorySlider slides={slidesMock} />);

    expect(getByText('Slide Title 1')).toBeTruthy();

    expect(getByText('Learn More')).toBeTruthy();
  });

  test('moves to the next slide when the button is pressed', () => {
    const {getByText, getByRole} = render(<StorySlider slides={slidesMock} />);

    expect(getByText('Slide Title 1')).toBeTruthy();

    const nextButton = getByRole('button', {name: 'Next >'});
    fireEvent.press(nextButton);

    expect(getByText('Slide Title 2')).toBeTruthy();
  });
});
