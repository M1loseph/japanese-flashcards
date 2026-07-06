#!/bin/bash

set -euo pipefail

if [ $# -eq 0 ]; then
  echo "usage: $0 <word>" >&2
  exit 1
fi

WORD="$1"
RESPONSE=$(curl -s -X GET --data-urlencode "keyword=$WORD" "https://jisho.org/api/v1/search/words" -H "accept: application/json")
DATA=$(echo "$RESPONSE" | jq -r 'if .data == null then error("API error: " + (. // "empty response") | tostring) else .data[:5] | map({slug, senses: .senses | map({english_definitions, tags})}) end')
echo "$DATA" | jq -c -M
