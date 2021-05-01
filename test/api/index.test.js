const chai = require('chai');
const chaihttp = require('chai-http');
const should = chai.should();
const server = require('../../app');// ulash jarayoni tugadi appni kichik test qilamiz.
chai.use(chaihttp);



describe('Bosh sahifani testdan o`tqazdik', () => {  // ingilizcha yozish kerak aslida
    it('get method orqali bosh sahifani tekshiruvdan o`tqazdik', (done) => {
        chai.request(server)
        .get('/') 
        .end((err, res) => {
            res.should.have.status(200)
            done()
        })
    })
})







