# Figma and App Workflow

https://www.figma.com/design/TMGW6rLGene3cqHb4Kilz5/Pitch-Startup-App?node-id=62001-4701&t=7bgXvOWid1OQo6Ko-0

https://miro.com/app/board/uXjVLT_tMdU=/

</br>

# Setup

```bash
npx create-next-app@latest pitch
```

```bash
npm i next-auth@beta
```

```bash
npx auth secret
```

```bash
npm i tailwindcss-animate
```

```bash
npm i @tailwindcss/typography
```

Below code in package.json was added so that other dependencies/packages don't use other version of react like 18

```bash
"packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom",
    "next": "$next"
  },
```

</br>

# Authentication via github

https://authjs.dev/getting-started/authentication/oauth

https://authjs.dev/getting-started/providers/github

https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app

</br>

# shadcn

Refer(https://ui.shadcn.com/docs/cli)

```bash
npx shadcn@latest init
```

shadcn provides few installed icons which we can import from lucid and if we want to use any component we can directly install and it will get added to components/ui and we customise it as per our need

ex:

```bash
npx shadcn@latest add button
```

</br>

# Sanity

To use Sanity for data
https://www.sanity.io/manage/personal/project/wq5r9b3w/getting-started

```bash
npm create sanity@latest -- --project wq5r9b3w --dataset production --template clean --typescript --output-path studio-pitch

cd studio-pitch

npm i next-sanity@canary
```

In startup schema we are using markdown type , its a custom field which use plugin by sanity

```bash
npm i sanity-plugin-markdown
```

In sanity we can create interface/type of props passed,
Refer (https://www.sanity.io/learn/course/content-driven-web-application-foundations/generate-typescript-types)

To do that, Run

```bash
npx sanity@latest schema extract --path=./sanity/extract.json
```

To extract existing schema
Create sanity-typegen.json

Then run the command

```bash
npx sanity@latest typegen generate
```

Check sanity learn for package.json script changes

Then run

```bash
npm run typegen
```

</br>

# Cache and live api w next.js

useCDN - true - cache data for 60 sec (Faster)
useCDN - false - live updates - for real time data - on refresh

Without refresh - sanity's live content API is used
(https://www.sanity.io/docs/live-content-api)

To implement

```bash
npm i server-only
```

this package will ensure specific module will only be used in server components
</br>

# Real Time Search with URL params

update query with filters in queries.ts

</br>

# Startup details

We dont need live api here because we are not on details page all the time and need live updates

Diff rendering strategy on same page - Partial Prerendering - [PPR](https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering)
<br/>
Single page can render static/revalidated/from cache and dynamic part

Update next.config.ts and
[The experimental feature "experimental.ppr" can only be enabled when using the latest canary version of Next.js.] so make sure you have it

```bash
npm install next@canary
```

Fetch all the details in startup page

To convert markdown to html / string, install [markdown-it](https://www.npmjs.com/package/markdown-it)

```bash
npm i markdown-it
npm i --save-dev @types/markdown-it
```

In details page , to have dynamic component(Views) in PPR page we are using suspense and as fallback we are using shadcn's skeleton component. To do so, run

```bash
npx shadcn@latest add skeleton
```

sanity api in page is using incremental static regeneration [(ISR)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)
<br/>

# Sanity Write Client

Write action can only happen from server side so we are adding server only in write-client

With this approach these two req will run sequentially , we won't see anything until these two are run and we will see only skeleton to run this in bg we can use [unstable_after/after ](https://nextjs.org/docs/app/api-reference/functions/after) from next js allows you to schedule work

if after doesn't work withour explicitly enabling add it in next config

```bash
 experimental: {
    ppr: 'incremental',
    after: true,
  }
```

<br/>

# Author Authentication Flow

When a user is logged in then we need to check if it exists as author or not if it doesn't then we are creating author in one of callbacks in auth.ts

After a successful sign in, we need to create author id from sanity to use it for our profile or when creating a new startup lets do it with jwt (adding author id in token)

Due to caching we will get undefined session even if everything is working fine as nextjs is using caching machenism so we'll have to false the usecdn param

<br/>

# Startup Form

To make sure only loggedin user can access this page , we will check session before

In startup Form we are going to be using following shadcn components

```bash
npx shadcn@latest add input textarea toast
```

For markdown, we are using [@uiw/react-md-editor](https://www.npmjs.com/package/@uiw/react-md-editor)

```bash
npm i @uiw/react-md-editor
```

To submit form we have used [useActionState](https://react.dev/reference/react/useActionState) hook

For validation we are using [zod](https://zod.dev/?id=from-npm)

Create new file in lib folder (Validation.ts)

<br/>

# Server Actions

[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

Create function createIdea

To generate slug(unique identifier) we are using [slugify](https://www.npmjs.com/package/slugify) instead of doing it manually

```bash
npm i slugify
```
</br>

# User Profile

Another use case of ppr  
User details - static
Startup details - dynamic

</br>

# Responsiveness

To make navbar responsive add classes to hide particular elements at particular screen size and for profile/user use avatar from shadcn using

```bash
npx shadcn@latest add avatar
```

</br>

# Parallel Fetching and Recommendations

For recommendations - create playlist schema and few posts from snaity directly and query those here under startup details pick under editor picks or anything sutaible

We have to be aware of two data fetching [patterns](https://nextjs.org/docs/14/app/building-your-application/data-fetching/patterns) - parallel and sequential

For independent request, use parallel - Promise.all - load time will be equal to longest among two not the sum of two

# build errors in prod

To avoid such unwanted errors in prod build we can follow [here](https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript)

# After Deployment

Allow CORS origin in sanity and update url in git oauth