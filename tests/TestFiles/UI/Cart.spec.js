import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { ProductPage } from '../../Pages/ProductPage.js';
test('Add and remove product from cart', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.openHomepage();
    await homePage.searchProduct('Orestes Fitness Short');

    const productPage = new ProductPage(page);
    await productPage.selectProduct();
    await productPage.selectOptions();
    await productPage.addToCart();

    await productPage.goToCart();
    await productPage.productFountInTheCart();
    await productPage.validatePriceAndQuantity();
});
