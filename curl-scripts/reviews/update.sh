#!/bin/bash

API="http://localhost:4741"
URL_PATH="/songs"

curl "${API}${URL_PATH}/${SONG_ID}/reviews/${REVIEW_ID}/edit-review" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "review": {
      "review": "'"${REVIEW}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
