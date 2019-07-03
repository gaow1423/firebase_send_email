#! /bin/bash

green=`tput setaf 2`
blue=`tput setaf 4`
white=`tput setaf 7`
bold=`tput bold`
normal=`tput sgr0`

source .env

echo ""
echo "${bold}${blue}Variables:${normal}${white}"
echo "API_KEY:     ${green}${API_KEY}${white}"

echo ""

firebase functions:config:set api.key="${API_KEY}"
firebase functions:config:set email.from="${EMAIL_FROM}"
firebase functions:config:set email.pass="${EMAIL_PASS}"
firebase functions:config:get