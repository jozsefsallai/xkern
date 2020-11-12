#!/bin/sh
if [ ! -f .env ]
then
  echo ".env file doesn't exist\nPlease create the file and set STATIC_DEPLOY_PATH"
  exit -1
fi

source .env

if [ -z "$STATIC_DEPLOY_PATH" ]
then
  echo "Unknown static deploy path\nPlease set STATIC_DEPLOY_PATH in .env file."
  exit -1
fi

echo "Deploying at $STATIC_DEPLOY_PATH"
mkdir -p $STATIC_DEPLOY_PATH

if [ ! -d $STATIC_DEPLOY_PATH ]
then
  echo "Unable to create $STATIC_DEPLOY_PATH"
  exit -1
fi

echo "Resolving dependencies"
yarn
if [ $? -ne 0 ]
then
  echo "Unable to resolve components. Make sure npm is installed and run 'npm i -g yarn'"
  exit $?
fi

npx next telemetry disable

echo "Building static pages"
yarn export
if [ $? -ne 0 ]
then
  echo "Unable to build static pages"
  exit $?
fi

cp -R out/* $STATIC_DEPLOY_PATH

if [ $? -ne 0 ]
then
  echo "Unable to copy files; bailing"
  exit $?
fi

echo "Completed"
exit 0
