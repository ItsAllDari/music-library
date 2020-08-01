#!/bin/bash

API="http://localhost:4741"
URL_PATH="/songs"

curl "${API}${URL_PATH}/${SONG_ID}/reviews/${REVIEW_ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
