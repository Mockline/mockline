#!/bin/bash

# Restore all git changes
git restore -s@ -SW  -- .

# Bump versions to edge
bunx jiti ./scripts/bump-ui

# Update token
if [[ ! -z ${NPM_TOKEN} ]] ; then
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc
  echo "registry=https://registry.npmjs.org/" >> ~/.npmrc
  echo "always-auth=true" >> ~/.npmrc
  npm whoami
fi

# Release package
echo "Publishing @mockline/ui"
cd packages/mockline
npm publish -q --access public
