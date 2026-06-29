import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Toast } from './Toast';

describe('Toast', () => {
    it('renders the Toast component with the correct message and type', () => {
        const message = 'Test message';
        const type = 'success';
        const { getByText } = render(<Toast message={message} type={type} open={true} />);
        const toastElement = getByText(message);
        expect(toastElement).toBeInTheDocument();
        expect(toastElement.parentElement).toHaveClass('alert-success');
    });

    it('does not render the Toast when open is false', () => {
        const message = 'Hidden message';
        const type = 'warning';
        const { queryByText } = render(<Toast message={message} type={type} open={false} />);
        const toastElement = queryByText(message);
        expect(toastElement).toBeNull();
    });

    it('closes the Toast after the specified auto-dismiss time', async () => {
        const message = 'Auto-dismiss test';
        const type = 'error';
        const autoDismissTime = 200;
        const handleClose = vi.fn();
        render(
            <Toast
                message={message}
                type={type}
                open={true}
                autoDismissTime={autoDismissTime}
                handleClose={handleClose}
            />,
        );
        await new Promise((resolve) => setTimeout(resolve, autoDismissTime + 50));
        expect(handleClose).toHaveBeenCalled();
    });
});
