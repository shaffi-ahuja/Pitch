Below code in package.json was added so that other dependencies/packages don't use other version of react like 18

"packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom",
    "next": "$next"
  },



shadcn provides few installed icons which we can import from lucid and if we want to use any component we can directly install and it will get added to components/ui and we customise it as per our need

ex: npx shadcn@latest add button


To use Sanity for data

npm create sanity@latest -- --project wq5r9b3w --dataset production --template clean --typescript --output-path studio-pitch
cd studio-pitch


In structure schema we are using markdown type , its a custom field which use plugin by sanity

npm i sanity-plugin-markdown

In sanity we can create interface/type of props passed
to do that
run
npx sanity@latest schema extract --path=./sanity/extract.json
to extract existing schema
Create sanity-typegen.json

Then run the command
npx sanity@latest typegen generate

Check sanity learn for package.json script changes

Then run npm run typegen
