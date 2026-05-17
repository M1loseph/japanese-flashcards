import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    it('renders the ProgressBar component with the correct title and progress', () => {
        const title = 'Test Progress';
        const currentIndex = 3;
        const total = 10;
        const timeInSeconds = 3661; // 1 hour, 1 minute, and 1 second
        const { getByText, getAllByText } = render(
            <ProgressBar title={title} currentIndex={currentIndex} total={total} timeInSeconds={timeInSeconds} />,
        );

        const titleElement = getByText(title);
        expect(titleElement).toBeInTheDocument();
        const progressElement = getByText('30%');
        expect(progressElement).toBeInTheDocument();
        const timeElement = getAllByText('01:01:01');
        expect(timeElement).toHaveLength(2);
        const cardsLeftElement = getAllByText('Cards left: 7');
        expect(cardsLeftElement).toHaveLength(2);
    });
});
