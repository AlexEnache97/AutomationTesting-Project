const Page = require('./page');
const axios = require('axios');
const { config } = require('../../wdio.conf');

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
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

    get btnToRent(){
        return $('div=To Rent');
    }
     /**
     * Select only the links under the "Dubai Apartments" section
     */
    async popularLocations(){
        try {
            const dubaiAptsHREF = await $('div._6944f1d2 a').getAttribute('href');
            const data = await $$('div._41d30143 ul a').map((value) => {return value.getAttribute('href')});
            let mappedData = data.map((value) => {
                if (value.indexOf(dubaiAptsHREF) > -1){
                    return value;
                } else {
                    return null;
                }
            });
            let notNull = mappedData.filter((value) => value);
            return notNull;
        } catch(err) {
            throw new Error(err);
        }
    }

    /**
     * Selects the buy option and adds the location to the search bar
     */
    async search (location) {
        await this.btnPurpose.click();
        await this.btnPurposeType.click();
        await this.inputLocation.setValue(location);
        await this.listboxLocation.click();
        await this.btnSearch.click();
        
    }

    /**
     * Selects the option "to Rent" for popular searches and then checks if all the links load correctly
     */
    async popularSearch () {
        let statusList = []
        try {
            await this.btnToRent.click();
            const popularLocations = await this.popularLocations();
            for(let link of popularLocations) {
                const url = config.baseUrl + link.replace('/', '')
                const response = await axios.get(url);
                statusList.push(response.status);
            }
        } catch (err) {
            throw new Error(err);
        }
        return statusList;
    }

    open() {
        return super.open('');
    }
}

module.exports = new HomePage();