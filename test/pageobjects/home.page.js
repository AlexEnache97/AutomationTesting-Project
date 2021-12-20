const Page = require('./page');

class HomePage extends Page {
   
    get inputLocation() {
        return $('[type="text"]');
    }

    get inputPurpose() {
        return $('span.fontCompensation');
    } 

    get btnSearch() {
        return $('[aria-label="Find button"]');
    }

    get btnPurpose() {
        return $('[role="button"]');
    }

    get btnPurposeType() {
        return $('[aria-label=Buy]');
    }

    get listboxLocation() {
        return $('[data-selected="true"]');
    }

    async search (purpose, location) {
        await this.btnPurpose.click();
        await this.btnPurposeType.click();
        await this.inputLocation.setValue(location);
        await this.listboxLocation.click();
        await this.btnSearch.click();
    }



    open() {
        return super.open('');
    }
}

module.exports = new HomePage();