const HomePage = require('../pageobjects/home.page');
const { expect } = require('chai');

describe('Check popular searches', () => {
    it('should check if links work', async () => {
        await HomePage.open()

        const expected = Array(10).fill(200)
        const httpResponses = await HomePage.popularSearch();
        
        expect(httpResponses).to.eql(expected);
    });
    
 });



