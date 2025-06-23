#!/bin/bash

# run in root of the project
for file in src/util/*.js; do                                                                                                                                     130 ↵
  filename=$(basename "$file" .js)
  npx jsdoc2md "$file" > "docs/util/${filename}.md" echo $?
done
