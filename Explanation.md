Below code in package.json was added so that other dependencies/packages don't use other version of react like 18

"packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom",
    "next": "$next"
  },