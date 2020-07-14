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

// for user contributions, user helpful votes
const generateNumber = (num) => getRandomIndex(num + 1);

// for ratings, 1-5
const generateRating = () => Math.floor(Math.random() * 5) + 1;

const generateDate = (start) => {
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const writeReviews = fs.createWriteStream('../../csv/sqlReviews3.csv');

const writeReviewsTable = (writer, callback) => {
  let count = 0;
  let hotelInd = 100003;
  let ok = true;
  const write = () => {
    ok = true;
    while (ok && count < 10000000) {
      if (count % 200 === 0) {
        hotelInd++;
      }
      if (count % 100000 === 0) {
        console.log(count);
      }
      count++;
      const dateOfStay = generateDate(new Date(2010, 0, 1));
      const reviewDate = generateDate(dateOfStay).toISOString().split('T')[0];

      const queryStr = `${generateNumber(2000000) + 1},${hotelInd},${reviewDate},${generateReviewBody()},${reviewDate},${generateRoomTip()},${generateTripType()},${generateRating()},${generateRating()},${generateRating()},${generateRating()},${generateRating()},${generateRating()},${generateRating()},${generateNumber(5)},${generateNumber(10)}\n`;
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

writeReviewsTable(writeReviews, () => {
  writeReviews.end();
});

// \copy reviews(user_id, hotel_id, review_date, review_body, date_of_stay, room_tip, trip_type, overall_rating, value_rating, location_rating, service_rating, rooms_rating, cleanliness_rating, sleep_quality_rating, collected_in_part_hotel, review_helpful_votes) from '/Users/samsumsion/Documents/_hackReactor/SDC/csv/sqlReviews.csv' delimiter ',' csv;

// \copy users(username, user_avatar, user_city, user_contributions, user_helpful_votes) from '/Users/samsumsion/Documents/_hackReactor/SDC/csv/sqlUsers.csv' delimiter ',' csv;

// SELECT * FROM reviews
// INNER JOIN hotels
// ON reviews.hotel_id=hotels.id
// INNER JOIN users
// ON reviews.user_id=users.id
// WHERE reviews.hotel_id = 1;
