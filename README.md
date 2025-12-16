**Vacation Memories** is a performant photo gallery built with **[Next.js](https://nextjs.org)**, **[Cloudinary](https://cloudinary.com/pages/)**, and **[ShadCN](https://ui.shadcn.com/)**.

## Tech Stack 🧰

After weighing the pros and cons, I decided to use NextJS to optimize images.

Tailwind is used for ease of styling and Shadcn for the carousel and tootips. I love how these are configurable and accessible already.

Rather than setting up a database I decided to take advantage of Cloudinary.

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn/ui-%23000000?style=for-the-badge&logo=shadcnui&logoColor=white)

<br></br>
![Last Commit](https://img.shields.io/github/last-commit/JoleneKearse/oldtimey-kearse-vacations)

## Overview

First and foremost, this is a Christmas present for my dad, so some choices are made with him in mind.  Like:
- It starts on light mode, but I wanted to switch to dark mode for me.
- This is saved in local storage as that's all that's needed for this project's scope.  
- The gallery is for viewing all images.
- The grid view is for seeing all and downloading choice photos.  
- There is a quick search function with customized tags.

Home Page
![gallery view](image.png)
Grid Route
![grid view](image-1.png)

When users (my dad and me) come to the home page, they are greeted with an accessible carousel. They can download each image in the best format for their device, and switch the view and light/dark mode.

For fun, the gallery line-up is randomized each time.

## Links

Check out the [repo](https://github.com/JoleneKearse/oldtimey-kearse-vacations).

And the [live site](https://oldtimey-kearse-vacations.vercel.app/).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Challenges

### Making Cloudinary images downloadable

**Cloudinary** is simply easy to use, but that's a two-edged sword. Since it can do so much, it was initially challenging to find the _exact_ functionality I wanted.

I wanted a button to download images and fortunately it was as easy as modifying the url with `upload/fl_attachment,f_auto,q_auto/` rather than just `upload/i8`. I tossed that in a utility function & slapped it into an `onClick`. Bang boom done!

### Getting my photos to shuffle ASAP

I built my trusty `lib/photoUtils/shufflePhotos` function, which worked fantastic in _development_, but had this strange quirk where it always started with the same photo in _production_!

After plenty of _Huh_?!?s, I learned a new thing about **Next JS**. My Gallery and Grid components were served **client-side**. This meant I was only calling `getPhotos` and `shufflePhotos` once per build. So, it was getting _baked into_ the HTML. 🤦‍♀️

Enter this very cool line:

```javascript
export const dynamic = "force-dynamic";
```

This disables static optimization, making my shuffle run on every request. 🙌

While I was tempted to apply this to my `/grid` route, I abstained to make it easier to locate photos for download.

### Detecting a Hydration Error

NextJS was helpfully telling me I had a hydration error: `<button> cannot be a descendant of <button>`, but it mystified me.

Until I dived into the internals of **Shadcn**'s `carousel.tsx` and saw that it had also downloaded `button.tsx`.

I notice I over-engineered my own `Button` component. 🤦‍♀️ I wanted my grid and gallery view, light/dark mode, and download icons to all have a Tooltip, but considered them buttons.

![buttons with tooltips](tooltips.png)

I had to refactor my code to remove the extra buttons.
