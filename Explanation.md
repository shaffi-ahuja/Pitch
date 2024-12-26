Below code in package.json was added so that other dependencies/packages don't use other version of react like 18

"packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom",
    "next": "$next"
  },



shadcn provides few installed icons which we can import from lucid and if we want to use any component we can directly install and it will get added to components/ui and we customise it as per our need

ex: npx shadcn@latest add button