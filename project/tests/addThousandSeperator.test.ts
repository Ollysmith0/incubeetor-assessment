import { expect, test } from '@playwright/test';
import { addThousandSeparator } from '../src/utils/index.ts';

test('thousand seperator func should run properly', () => {
	expect(addThousandSeparator(1000)).toBe('1,000');
});

test('thousand seperator func should return 92,392,391', () => {
	expect(addThousandSeparator(92392391)).toBe('92,392,391');
});

test('thousand seperator func should run return 100', () => {
	expect(addThousandSeparator(100)).toBe('100');
});

test('thousand seperator func should run return invalid number', () => {
	expect(addThousandSeparator(-100)).toBe('invalid number');
});
