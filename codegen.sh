#!/bin/bash

if [[ $* == *--dev* ]];
then
    echo "Updating swagger.json file..."
    cp -r /Pavia/mpi_api/docs/swagger.json ./swagger.json
fi
if [[ $* == *--pull* ]];
then
    echo "Pulling latest..."
    git pull origin
fi

echo "Updating code generator tool..."
docker pull swaggerapi/swagger-codegen-cli:latest

DIR=$(pwd)

echo "Generating html documentation..."
docker run --rm -v $DIR:/headlight-client swaggerapi/swagger-codegen-cli generate -i /headlight-client/swagger.json -l html -o /headlight-client/docs
echo "Generating headlight-client (ts node library)..."
docker run --rm -v $DIR:/headlight-client swaggerapi/swagger-codegen-cli generate -i /headlight-client/swagger.json -l typescript-node -t /headlight-client/node/templates -DmodelPropertyNaming=original -DsupportsES6=true -o /headlight-client/node
echo "Generating headlight-client-angular (ts angular library)..."
docker run --rm -v $DIR:/headlight-client swaggerapi/swagger-codegen-cli generate -i /headlight-client/swagger.json -l typescript-angular -DmodelPropertyNaming=original -DsupportsES6=true -DngVersion=6 -o /headlight-client/angular6
echo "Generating headlight-client-angular (ts angular library)..."
docker run --rm -v $DIR:/headlight-client swaggerapi/swagger-codegen-cli generate -i /headlight-client/swagger.json -l typescript-angularjs -DmodelPropertyNaming=original -DsupportsES6=true -DngVersion=6 -o /headlight-client/angularjs



#config help tool
#docker run --rm swaggerapi/swagger-codegen-cli config-help -l typescript-node
