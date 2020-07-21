DROP DATABASE reviewComp;
CREATE DATABASE reviewComp;

\c reviewcomp;

CREATE TABLE hotels (
  id SERIAL NOT NULL,
  hotel_name varchar(140) NOT NULL,
  hotel_city varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id SERIAL NOT NULL,
  username varchar(50) NOT NULL,
  user_avatar varchar(255),
  user_city varchar(255) NOT NULL,
  user_contributions int DEFAULT 0,
  user_helpful_votes int DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id SERIAL NOT NULL,
  user_id int NOT NULL REFERENCES users(id),
  hotel_id int NOT NULL REFERENCES hotels(id),
  review_date TIMESTAMP NOT NULL,
  review_body text NOT NULL,
  date_of_stay DATE NOT NULL,
  room_tip varchar(140),
  trip_type varchar(60),
  overall_rating smallint NOT NULL,
  value_rating smallint,
  location_rating smallint,
  service_rating smallint,
  rooms_rating smallint,
  cleanliness_rating smallint,
  sleep_quality_rating smallint,
  collected_in_part_hotel smallint,
  review_helpful_votes int DEFAULT 0,
  PRIMARY KEY (id)
);

-- To execute: mysql -u root < ./database/schema.sql
-- Kill answer date -- stretch feature
-- Killing UNIQUE from hotel_name (hotels table), username (users table), below constraint (reviews table)
-- CONSTRAINT one_review_per_user_per_hotel UNIQUE (user_id, hotel_id)