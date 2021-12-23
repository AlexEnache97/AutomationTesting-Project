const Page = require('./page');

class SearchResultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get propertyLocation() {
        return $$('[aria-label="Location"]');
    }


    open() {
        return super.open('/for-sale/property/dubai/dubai-marina/');
    }


}

module.exports = new SearchResultsPage();