#!/bin/bash

API="http://localhost:4741"
URL_PATH="/songs"

curl "${API}${URL_PATH}/${SONG_ID}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "review": {
      "note": "'"${NOTE}"'",
      "rating": "'"${RATING}"'"
    }
  }'

echo
