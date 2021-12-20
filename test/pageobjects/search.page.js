const Page = require('./page');

class SearchResultsPage extends Page {

    get propertyLocation() {
        return $$('[aria-label="Location"]');
    }

    get pages() {
        return $$('[title*="Page"]');
    }

    get btnNextPage(){
        return $('[title="Next"] a');
    }

    open() {
        return super.open('/for-sale/property/dubai/dubai-marina/');
    }

    open_page(page_index) {
        return super.open(page_index);
        // return super.open(`/for-sale/property/dubai/dubai-marina/page-${page_index}`);
    }

}

module.exports = new SearchResultsPage();