const Sequelize = require('sequelize');
const images = require('./images.js').images;
const videos = require('./videos.js').videos;

const sequelize = new Sequelize('product_view', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
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
  sequelize.query('CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR, image_1_url VARCHAR, image_2_url VARCHAR, image_3_url VARCHAR, image_4_url VARCHAR, image_5_url VARCHAR, image_6_url VARCHAR, video_url VARCHAR, category VARCHAR);')
    .then(data => {
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

        console.log(image_6_url);
        console.log(video_url);

        sequelize.query(
          `INSERT INTO products (id, name, image_1_url, image_2_url, image_3_url, image_4_url, image_5_url, image_6_url, video_url, category) VALUES ('${i}', '${name}', '${image_1_url}', '${image_2_url}', '${image_3_url}', '${image_4_url}', '${image_5_url}', '${image_6_url}', '${video_url}', '${category}')`, {
            type: sequelize.QueryTypes.INSERT
          }
        );
      }
      return data;
    });
};

sequelize.query("CREATE DATABASE product_view;")
  .then(() => {
    sequelize.close();
    sequelize = new Sequelize('product_view', 'root', '', {
      host: 'localhost',
      dialect: 'mysql'
    });
    seed();
  })
  .catch(err => {
    console.log(err);

    // sequelize.query("CREATE DATABASE product_view;")
    //   .then(() => {
    //     sequelize.close();
    //     sequelize = new Sequelize('product_view', 'root', '', {
    //       host: 'localhost',
    //       dialect: 'mysql'
    //     });
    //     seed();
    //   })

  });