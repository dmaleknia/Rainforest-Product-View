require('dotenv').config();

const Sequelize = require('sequelize');
const images = require('./images.js').images;
const videos = require('./videos.js').videos;

// const sequelize = new Sequelize('product_view', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

const dbUrl = process.env.DB_URL;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres'
});

const getImage = () => {
  let index = Math.floor((Math.random() * (images.length - 1)));
  return images[index];
}

const getVideo = () => {
  let index = Math.floor((Math.random() * (videos.length - 1)));
  return videos[index];
}

const seed = () => {
  sequelize.query(
    'CREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(255), image_1_url VARCHAR(255), image_2_url VARCHAR(255), image_3_url VARCHAR(255), image_4_url VARCHAR(255), image_5_url VARCHAR(255), image_6_url VARCHAR(255), video_url VARCHAR(255), category VARCHAR(255));')
    .then(() => {
      for (let i = 0; i < 100; i++) {
        let name = `product ${i}`;
        let image_1_url = getImage();
        let image_2_url = getImage();
        let image_3_url = getImage();
        let image_4_url = getImage();
        let image_5_url = getImage();
        let image_6_url = getImage();
        let video_url = getVideo();
        let category = `category ${i}`;
        sequelize.authenticate()
        .then(() => {
          sequelize.query(
            `INSERT INTO products (id, name, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, image_6_url, video_url, category) VALUES ('${i}', '${name}', '${image_1_url}', '${image_2_url}', '${image_3_url}', '${image_4_url}', '${image_5_url}', '${image_6_url}', '${video_url}', '${category}')`, {
              type: sequelize.QueryTypes.INSERT
            }
          );
        })
      }
    })
    .catch(err => {
      console.log(err.original);
    });
};

seed();
