/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const fs = require('fs');
// const db = require('./index.js');

const getRandomIndex = (optionArrayLength) => Math.floor(Math.random() * Math.floor(optionArrayLength));

const generateUserName = () => {
  const firstName = ['Dave', 'Eric', 'Rob', 'Craig', 'Greg', 'Adam', 'John', 'Raj', 'Taylor', 'Alex', 'Angela', 'Kathy', 'Destiny', 'Jennifer', 'Ashley', 'Jess'];
  const randomFirstName = firstName[getRandomIndex(firstName.length)];
  const lastInitial = ['J', 'D', 'W', 'S', 'K', 'C', 'H', 'A', 'B'];
  const randomLastInitial = lastInitial[getRandomIndex(lastInitial.length)];
  return `${randomFirstName} ${randomLastInitial}`;
};

const generateCity = () => {
  // cities only at first; could expand to states
  const city = ['Los Angeles', 'San Francisco', 'Dallas', 'Houston', 'Fort Worth', 'Louisville', 'New Orleans', 'San Diego', 'Chicago', 'St. Louis', 'Denver', 'Boise', 'Indianapolis', 'Jacksonville', 'Tampa', 'Miami', 'New York City', 'Nashville', 'Huntsville', 'Oklahoma City', 'Phoenix'];
  const randomCity = city[getRandomIndex(city.length)];
  return randomCity;
};

const generateUserAvatar = () => {
  const avatarUrls = ['https://image.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVscczKCwBsAg0aMMcI5NjX1meu8_HDZ3d2jhQonix1DCY5n1E&usqp=CAU', 'https://cache.desktopnexus.com/thumbseg/1584/1584748-bigthumbnail.jpg', 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUQobLPiOw-RstxSgFJdTdA5eB0xzHi8p8cbkZfG7u9Ne3xTqz&usqp=CAU'];
  const randomUrl = avatarUrls[getRandomIndex(avatarUrls.length)];
  return randomUrl;
};

// for user contributions, user helpful votes
const generateNumber = (num) => getRandomIndex(num + 1);

const generateHotelName = () => {
  const first = ['The', 'International', 'Regional', 'Intercontinental', 'Best', 'Oriental', 'Western', 'Northern', 'Luxury', 'Economy'];
  const randomFirst = first[getRandomIndex(first.length)];
  const middle = ['Holiday', 'Fairmont', 'Embassy', 'Travelers', 'Midtown', 'Uptown', 'Ambassadors', 'Nomad'];
  const randomMiddle = middle[getRandomIndex(middle.length)];
  const last = ['Resort', 'Suites', 'Hotel', 'Lodges', 'Club', 'Inn', 'Oriental', 'Lodge', 'Moon', 'Horizons', 'Quarters'];
  const randomLast = last[getRandomIndex(last.length)];
  return `${randomFirst} ${randomMiddle} ${randomLast}`;
};

const writeHotels = fs.createWriteStream('../../csv/sqlHotels.csv');

const writeHotelTable = (writer, callback) => {
  let count = 0;
  while (count < 150003) {
    const queryStr = `${generateHotelName()},${generateCity()}\n`;
    if (count === 150003) {
      writer.write(queryStr, 'utf-8', callback);
    } else {
      writer.write(queryStr, 'utf-8');
    }
    count++;
  }
};

writeHotelTable(writeHotels, () => {
  console.log('Seeded Hotels');
  writeHotels.end();
});

const writeUsers = fs.createWriteStream('../../csv/sqlUsers.csv');

const writeUserTable = (writer, callback) => {
  let count = 0;
  while (count < 2000001) {
    const queryStr = `${generateUserName()},${generateUserAvatar()},${generateCity()},${generateNumber(30)},${generateNumber(30)}\n`;
    if (count === 2000001) {
      writer.write(queryStr, 'utf-8', callback);
    } else {
      writer.write(queryStr, 'utf-8');
    }
    count++;
  }
};

writeUserTable(writeUsers, () => {
  console.log('Seeded Users');
  writeUsers.end();
});
