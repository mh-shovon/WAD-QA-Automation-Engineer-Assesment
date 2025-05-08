class ProductPage {
    constructor(page) {
        this.page = page;
        this.productItems = page.locator(".product-item");
        this.productItemsName = page.locator(".product-item-name");
        this.sizeOption = page.locator('.swatch-option.text');
        this.colorOption = page.locator('.swatch-option.color');
        this.addToCartBtn = page.locator('#product-addtocart-button');
        this.cartLink = page.locator('.action.showcart');
        this.itemTitle = page.locator('.product-item-name');
        this.viewCartBtn = page.locator('.viewcart');

    }

    async delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async selectProduct() {
        const desiredProductName = "Orestes Fitness Short";
        const productCount = await this.productItems.count();
        let i = 0;

        while (i < productCount) {
            const productTitle = this.productItemsName.nth(i);
            const textContent = await productTitle.textContent();

            if (textContent?.trim() === desiredProductName) {
                await productTitle.click();
                break;
            }
            i++;
        }
    }

    async selectOptions() {
        await this.delay(2000);
        await this.sizeOption.nth(1).click();
        await this.colorOption.nth(1).click();
    }

    async addToCart() {
        await this.addToCartBtn.click();
        await this.delay(2000);
    }

    async goToCart() {
        await this.delay(2000);
        await this.cartLink.click();
    }

    async validateItemInTheList() {
        const selectedProductName = "Orestes Fitness Short";
        const productCount = await this.itemTitle.count();
        let i = 0;

        while (i < productCount) {
            const productTitle = this.itemTitle.nth(i);
            const textContent = await productTitle.textContent();

            if (textContent?.trim() === selectedProductName) {
                await productTitle.isVisible();
                break;
            }
            i++;
        }
    }

    async validatePriceAndQuantity() {
        await this.viewCartBtn.click();
    }
}
module.exports = { ProductPage }