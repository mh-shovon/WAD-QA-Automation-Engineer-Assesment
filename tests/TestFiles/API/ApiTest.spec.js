import { test, expect, request } from '@playwright/test';

test('GET product categories API', async ({ request }) => {
    const response = await request.get('https://magento.softwaretestingboard.com/rest/V1/categories');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('id');
});