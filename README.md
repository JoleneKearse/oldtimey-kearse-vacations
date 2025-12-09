_Snowballs are blowing, Christmas elves are dancing..._ Uuugh - I totally hate winter, but it's also coming up to **Christmas**! That tradtional time of the year where you use your skills to craft apps your buddies never asked for. _Come on, it can't just be me!_

Anyway I had a leg up this year. My dad was hospitalized for a few months, so I went through the house, giving it a thorough clean and inspected every nook and cranny.

I had an _awesome_ break from this 'cope by cleaning' psychosis, where I discovered photo albums full of my family's past vacations. I had meant to send them to my dad then, but _I-don't-know-what-happened_. :woman_shrugging:

Fortunately, I can use them now to create a web app photo gallery, while learning too.

And not just any one, but a performant photo gallery, while using **[Next.js](https://nextjs.org)**, **[Cloudinary](https://cloudinary.com/pages/)**, and **[ShadCN](https://ui.shadcn.com/)**.

## Overview

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Challenges

I built my trusty `lib/photoUtils/shufflePhotos` function, which worked fantastically in _development_, but had this strange quirk where it always started with the same photo in _production_!

After plenty of _Huh_?!?s, I learned a new thing about **Next JS**. My Gallery and Grid components were served **client-side**. This meant I was only calling `getPhotos` and `shufflePhotos` once per build. So, it was getting _baked into_ the HTML. 🤦‍♀️
