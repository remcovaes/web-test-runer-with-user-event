import userEvent from '@testing-library/user-event';

describe('some', () => {
	it('bug', async () => {
		const input = document.createElement('input');
		document.body.append(input);
		
		await userEvent.click(input);
		await userEvent.keyboard('asdf');
		
		await new Promise(res => setTimeout(res, 10000000000));
	});
});
