#!/bin/bash


echo -e "\n${GREEN}--------------------------------------------"
echo -e "Removing old package file ..."
echo -e "--------------------------------------------${NC}\n"

rm poly-ui*.tgz

echo -e "\n${GREEN}--------------------------------------------"
echo -e "Building Package ..."
echo -e "--------------------------------------------${NC}\n"

npm run build

echo -e "\n${GREEN}--------------------------------------------"
echo -e "Packaging ..."
echo -e "--------------------------------------------${NC}\n"

npm pack

echo -e "\n${GREEN}--------------------------------------------"
echo -e "Copying to demo-app-react ..."
echo -e "--------------------------------------------${NC}\n"

cp -f poly-ui*.tgz ../demo-app-react

