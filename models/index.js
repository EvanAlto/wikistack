const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: true
});

const User = db.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

const Page = db.define('page', {
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
    content: Sequelize.TEXT,
    status: Sequelize.ENUM('open', 'closed')
    
})





module.exports = {
    Page,
    User,
    db
}
