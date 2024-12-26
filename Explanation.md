# Figma and App Workflow
https://www.figma.com/design/TMGW6rLGene3cqHb4Kilz5/Pitch-Startup-App?node-id=62001-4701&t=7bgXvOWid1OQo6Ko-0

https://miro.com/app/board/uXjVLT_tMdU=/


# Setup

npx create-next-app@latest pitch

npm i next-auth@beta

npx auth secret

npm i tailwindcss-animate

npm i @tailwindcss/typography

Below code in package.json was added so that other dependencies/packages don't use other version of react like 18

"packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom",
    "next": "$next"
  },

# Authentication via github

https://authjs.dev/getting-started/authentication/oauth

https://authjs.dev/getting-started/providers/github

https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app


# shadcn
Refer(https://ui.shadcn.com/docs/cli)

npx shadcn@latest init

shadcn provides few installed icons which we can import from lucid and if we want to use any component we can directly install and it will get added to components/ui and we customise it as per our need

ex: npx shadcn@latest add button

# Sanity
To use Sanity for data
https://www.sanity.io/manage/personal/project/wq5r9b3w/getting-started

npm create sanity@latest -- --project wq5r9b3w --dataset production --template clean --typescript --output-path studio-pitch
cd studio-pitch

npm i next-sanity@canary

In startup schema we are using markdown type , its a custom field which use plugin by sanity

npm i sanity-plugin-markdown

In sanity we can create interface/type of props passed,
Refer (https://www.sanity.io/learn/course/content-driven-web-application-foundations/generate-typescript-types)

To do that, Run

npx sanity@latest schema extract --path=./sanity/extract.json

To extract existing schema
Create sanity-typegen.json

Then run the command
npx sanity@latest typegen generate

Check sanity learn for package.json script changes

Then run 
npm run typegen
