const HomePage = require('../pageobjects/home.page');
const SearchResultsPage = require('../pageobjects/search.page');


describe('Search for Dubai Marina properties for sale', () => {
    it('should display only Dubai Marina properties for sale', async () => {
        await HomePage.open()
        await HomePage.search('Buy', 'Dubai Marina');

        await expect(SearchResultsPage.propertyLocation).toBeExisting();
        await expect(SearchResultsPage.propertyLocation).toHaveTextContaining("Dubai Marina");

    });
    
 });