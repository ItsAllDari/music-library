#!/bin/sh

API="http://localhost:4741"
URL_PATH="/songs"

curl "${API}${URL_PATH}/${SONG_ID}/reviews/" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
