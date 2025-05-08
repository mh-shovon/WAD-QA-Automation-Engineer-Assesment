class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('#search');
        this.searchResults = page.locator('.product-item');
    }

    async openHomepage() {
        await this.page.goto("https://magento.softwaretestingboard.com/");
    }

    async delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async searchProduct(keyword) {
        await this.searchInput.fill(keyword);
        await this.searchInput.press('Enter');
        await this.delay(1000);
    }

    async getResults() {
        return this.searchResults;
    }
}

module.exports = { HomePage }