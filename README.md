# SSN8KSS / Hoteloooo

> Project description

## Related Projects

  - https://github.com/SSN8KSS/gallery
  - https://github.com/SSN8KSS/calendar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Server API

### Get hotel Reviews
  * GET `/reviews/:hotelId`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `200`

**Returns:** JSON

```json
[
  {
    "review_id": "Number",
    "user_id": "Number",
    "hotel_id": "Number",
    "review_date": "String",
    "review_body": "String",
    "date_of_stay": "String",
    "room_tip": "String",
    "trip_type": "String",
    "overall_rating": "Number",
    "value_rating": "Number",
    "location_rating": "Number",
    "service_rating": "Number",
    "rooms_rating": "Number",
    "cleanliness_rating": "Number",
    "sleep_quality_rating": "Number",
    "collected_in_part_hotel": "Number",
    "review_helpful_votes": "Number",
    "month_of_stay": "Number",
    "hotel_name": "String",
    "hotel_city": "String",
    "username": "String",
    "user_avatar": "String",
    "user_city": "String",
    "user_contributions": "Number",
    "user_helpful_votes": "Number"
  },
  ...
]
```

### Add hotel review
  * POST `/reviews/:hotelId`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `201`

**Request Body:** Expects JSON with the following keys.

```json
  {
    "user_id": "Number",
    "hotel_id": "Number",
    "review_date": "String",
    "review_body": "String",
    "date_of_stay": "String",
    "room_tip": "String",
    "trip_type": "String",
    "overall_rating": "Number",
    "value_rating": "Number",
    "location_rating": "Number",
    "service_rating": "Number",
    "rooms_rating": "Number",
    "cleanliness_rating": "Number",
    "sleep_quality_rating": "Number",
    "collected_in_part_hotel": "Number",
    "review_helpful_votes": "Number",
    "month_of_stay": "Number",
    "hotel_name": "String",
    "hotel_city": "String",
    "username": "String",
    "user_avatar": "String",
    "user_city": "String",
    "user_contributions": "Number",
    "user_helpful_votes": "Number"
  },
```

### Update hotel Review
  * PATCH `/reviews/:hotelId/:reviewId`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `204`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated)

```json
  {
    "user_id": "Number",
    "hotel_id": "Number",
    "review_date": "String",
    "review_body": "String",
    "date_of_stay": "String",
    "room_tip": "String",
    "trip_type": "String",
    "overall_rating": "Number",
    "value_rating": "Number",
    "location_rating": "Number",
    "service_rating": "Number",
    "rooms_rating": "Number",
    "cleanliness_rating": "Number",
    "sleep_quality_rating": "Number",
    "collected_in_part_hotel": "Number",
    "review_helpful_votes": "Number",
    "month_of_stay": "Number",
    "hotel_name": "String",
    "hotel_city": "String",
    "username": "String",
    "user_avatar": "String",
    "user_city": "String",
    "user_contributions": "Number",
    "user_helpful_votes": "Number"
  },
```

### Delete Review
  * DELETE `/reviews/:hotelId/:reviewId`

**Path Parameters:**
  * `hotelId` hotel id
  * `reviewId` review id

**Success Status Code:** `204`

