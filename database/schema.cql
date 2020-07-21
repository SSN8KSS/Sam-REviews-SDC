DROP KEYSPACE IF EXISTS reviews;
CREATE KEYSPACE reviews WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy', 'datacenter1' : 3 };

USE reviews;

DROP TABLE IF EXISTS reviews.byHotelid;
CREATE TABLE reviews.byHotel (
  id INT,
  hotel_name VARCHAR,
  review_date DATE,
  hotel_city VARCHAR,
  username VARCHAR,
  user_avatar VARCHAR,
  user_city VARCHAR,
  review_body TEXT,
  room_tip VARCHAR,
  trip_type VARCHAR,
  overall_rating INT,
  value_rating INT,
  location_rating INT,
  service_rating INT,
  rooms_rating INT,
  cleanliness_rating INT,
  sleep_quality_rating INT,
  review_helpful_votes INT,
  PRIMARY KEY (id, review_date)
);