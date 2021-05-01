
const chai = require('chai');
const chaihttp = require('chai-http');
const { token } = require('morgan');
const should = chai.should();
const server = require('../../app.js');// ulash jarayoni tugadi appni kichik test qilamiz.
chai.use(chaihttp);



describe('music larni testdan o`tqizyapmiz', () => {  // ingilizcha yozish kerak aslida

    before((done) => {
        chai.request(server)
        .post('/authenticate')
        .send({username: "sarvarkun", password: '12345'})
        .end((err, res) => {
            const token = res.body.token // kelyotgan javobni token ga joylashtirdim
            console.log(token);
            done()
        })
        
    })


    describe('/get music', () => {
        it('get methodi orqali musiclarni tekshirdik', (done) => { // token to`gri bo`lsa kirib ko`rishga ruhsat beradi
            chai.request(server)
            .get('/music')
            .send('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array'); // qachonki id orqali kelsa object qilish kerak bo`ladi
                done()
            })
        })
    }) // birinchi befor ishledi va token oladi va musicda ishlashi kerak bol`di buning uchun token kerak
    
    
    
    // post method orqali yangi malumot kiritishni test qilish
    describe('/post music', () => {
        it('post orqali yangi music kiritish', (done) => { 

            const music = {
                title: "yo`ldagi odam",
                category : "bilaman",
                country: "uzbek",
                year : 2085,
                director_id: "608184c24135c02e20cceccb",
                imdb_score : 8
            }

            chai.request(server)
            .post('/music') // post orqali yuboramiz 
            .send(music) // bazamizga musicni yuboramiz yani yangi music qo`shilyapdimi yuqmi tekshiramiz
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object'); 
                res.body.should.have.property('title')
                res.body.should.have.property('category')
                res.body.should.have.property('country')
                res.body.should.have.property('year')
                res.body.should.have.property('director_id')
                res.body.should.have.property('imdb_score')
                done()
            })
        })
    }) 










    // it('get method orqali bosh sahifani tekshiruvdan o`tqazdik', (done) => {
    //     chai.request(server)
    //     .get('/') 
    //     .end((err, res) => {
    //         res.should.have.status(200)
    //         done()
    //     })
    // })
})







