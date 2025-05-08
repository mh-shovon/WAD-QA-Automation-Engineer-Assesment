import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';

test('Search functionality shows relevant products', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.openHomepage();
    await homePage.searchProduct('Fusion');

    const results = await homePage.getResults();
    const count = await results.count();
    await expect(count).toBeGreaterThan(0);
});