/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const fs = require('fs');
// const db = require('./index.js');

const getRandomIndex = (optionArrayLength) => Math.floor(Math.random() * Math.floor(optionArrayLength));

const generateReviewBody = () => {
  const moods = ['hated', 'was taken aback by', 'was angered by', 'was confused by', 'was surprised by', 'was delighted by', 'was happy with', 'loved', 'liked'];
  const randomMood = moods[getRandomIndex(moods.length)];
  const nouns = ['chairs', 'cupboards', 'refreshments', 'assistance', 'amenities', 'appliances'];
  const randomNoun = nouns[getRandomIndex(nouns.length)];
  const areas = ['workout room', 'lobby', 'outdoor area', 'room', 'bathroom', 'garage'];
  const randomArea = areas[getRandomIndex(areas.length)];
  const locationAdjectives = ['horrible', 'noisy', 'okay', 'nothing special', 'relaxing', 'vibrant', 'pleasant', 'fun', 'perfect'];
  const randomAdj = locationAdjectives[getRandomIndex(locationAdjectives.length)];
  const stayAgainLikelihood = ['not', 'probably not', 'potentially', 'likely', 'very likely', 'definitely', 'certainly'];
  const randomLikelihood = stayAgainLikelihood[getRandomIndex(stayAgainLikelihood.length)];
  return `I ${randomMood} the ${randomNoun} in the ${randomArea}. The location was ${randomAdj}. I would ${randomLikelihood} stay here again.`;
};

const generateRoomTip = () => {
  // some people might not have tips, but assume everyone does at first
  const commands = ['Do not forget to', 'Make sure to', 'Always', 'You might want to', 'I would advise everyone to', 'Never forget to', 'It is always recommended that you', 'Do not', 'Never'];
  const randomCommand = commands[getRandomIndex(commands.length)];
  const actions = ['try the snacks', 'hang out in the lobby', 'eat at the hotel restaurant', 'go swimming', 'ask for an upgrade', 'request a tour of the facilities', 'ask for local restaurant recommendations', 'tip the maids', 'use the mini bar', 'check out the bar'];
  const randomAction = actions[getRandomIndex(actions.length)];
  return `${randomCommand} ${randomAction}.`;
};

const generateTripType = () => {
  const tripTypes = ['Families', 'Couples', 'Solo', 'Business', 'Friends'];
  const randomTripType = tripTypes[getRandomIndex(tripTypes.length)];
  return randomTripType;
};

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

// for ratings, 1-5
const generateRating = () => Math.floor(Math.random() * 5) + 1;

const generateDate = (start) => {
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateHotelName = () => {
  const first = ['The', 'International', 'Regional', 'Intercontinental', 'Best', 'Oriental', 'Western', 'Northern', 'Luxury', 'Economy'];
  const randomFirst = first[getRandomIndex(first.length)];
  const middle = ['Holiday', 'Fairmont', 'Embassy', 'Travelers', 'Midtown', 'Uptown', 'Ambassadors', 'Nomad'];
  const randomMiddle = middle[getRandomIndex(middle.length)];
  const last = ['Resort', 'Suites', 'Hotel', 'Lodges', 'Club', 'Inn', 'Oriental', 'Lodge', 'Moon', 'Horizons', 'Quarters'];
  const randomLast = last[getRandomIndex(last.length)];
  return `${randomFirst} ${randomMiddle} ${randomLast}`;
};

const writeHotels = fs.createWriteStream('cql3.csv');

const write10millionReviews = (writer, callback) => {
  let count = 0;
  let hotelInd = 100003;
  let hotelName = generateHotelName();
  let ok = true;
  const write = () => {
    ok = true;
    while (ok && count < 10000000) {
      if (count % 200 === 0) {
        hotelInd++;
        hotelName = generateHotelName();
      }
      if (count % 100000 === 0) {
        console.log(count);
      }
      count++;
      const dateOfStay = generateDate(new Date(2010, 0, 1));
      const reviewDate = generateDate(dateOfStay).toISOString().split('T')[0];
      const queryStr = `${hotelInd},${reviewDate},${generateRating()},${generateCity()},${hotelName},${generateRating()},${generateRating()},${generateReviewBody()},${generateNumber(30)},${generateRoomTip()},${generateRating()},${generateRating()},${generateRating()},${generateTripType()},${generateUserAvatar()},${generateCity()},${generateUserName()},${generateRating()}\n`;
      if (count === 10000000) {
        console.log(hotelInd, count);
        writer.write(queryStr, 'utf-8', callback);
      } else {
        ok = writer.write(queryStr, 'utf-8');
      }
    }
    if (count < 10000000) {
      writer.once('drain', write);
    }
  };
  write();
};

write10millionReviews(writeHotels, () => { writeHotels.end(); });
