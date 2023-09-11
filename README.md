# Integrated Portfolio

It's here! My comprehensive portfolio spanning computer science, economics, and the creative arts is here. I call it my first-ever integrated portfolio, because never before have all of my academic (or otherwise) disciplines been in one cohesive website.

## Tech Stack

* Next.js 13 (`/app` router)
* Tailwind CSS
* Framer Motion
* Hygraph CMS (for papers and literature)

## Website Structure

* `/` : Homepage. This is supposed to make accessible all the most crucial things you may need. A link to my about page? Yes. A link to a featured project? Yup. Links to the `projects` route? Tick. Links to major professional platforms like GitHub and LinkedIn? Check. If you landed up here, it can be a one-stop destination to my various social profiles and projects. 
* `/about` : About Page. This is to show a bit of my personality, and my skills. It has a brief bio, some random trivia about me, information about the kinds of tech I use most regularly, my location (with a cool scrolling animation on the location icon), professional links (of course), and a from-scratch barebones media player to play Lavender Haze by Taylor Swift. Total vibe.
* `/experience` : Now maybe you don't want to look at my ATS-compliant resume. Here, you can look at things with a little more formatting.
* `/academics` : This is probably the place which differs the most from my resume. While academic information in my resume has very little real estate, I am able to thoroughly explain my collegiate career in this, including awards, GPA, full list of courses, and a detailed account of my study abroad experience at New College, University of Oxford. #oxonian.
* `/projects` : A long list of my projects, with icons to demonstate what all major blocks went into the tech stack of each project. I usually link all of them to my GitHub, but you are encouraged to look at live production versions of all my web apps, updated links to which are in their GitHub repositories.
* `/papers` : A list of select academic papers, with topic tags, publish dates, and an abstract. All paper cards link to the PDF of the paper, hosted on Hygraph CMS
* `/literature` : A list of select poems and short stories, with tags, publish dates, and a description (if applicable). All cards link to `/literature/[slug]` dynamic routes that display the entire story/poem. All pathnames of the dynamic routes are generated at build time (using the Next.js reserved function export `getStaticParams()`), with all data fetched from Hygraph. Hence, there is no client-side calling of Hygraph APIs to fetch the required story/poem.
* `/photography` : A grid of high-quality versions of some of my favorite photos that I took, which do NOT include humans. All photos are fetched from my dedicated CMS endpoint. The quality is not 100% perfect -- since for the purposes of hosting and displaying I had to convert RAW, DNG, HEIC, and HDR images all to PNGs, but its mostly there. All photos are optimized thanks to `next/image` and the `<Image/>` component. 

## UI/UX Details

### Main Layout

* Everything is arranged in a modular grid with 4 columns. Components vary throughout in width, but usually their length is 1 or 2 rows maximum. In a phone layout, everything is in a single column (in fact, the phone layout just uses vertical flexbox system). This makes sure that nothing looks too cramped in mobile view. Padding is significantly lesser in a phone layout, to maximize utilization of screen real estate. The grid system allows for maximum utilization of screen real estate on larger displays, and containers of different widths and heights breaks the monotony of a traditional fixed length and width grid container system, which often looks a little old school and corporate.

### Buttons

* Primary: The highest level of buttons take the shape and style of a grid element themselves. The current most-used top level button is `/src/app/components/MarqueeButton.tsx`
* Secondary: These buttons are placed inside of a grid element container, and are usually used as second-level call to action buttons within the page, and first-level call-to-actions within the grid element. The current most-used top level button is `/src/app/components/Index/ActionButton.tsx`
* Tertiary: These buttons are usually used for links that only some users would be interested in. They are second-level call to action buttons within a grid element and third-level call to action buttons within a page.

While the primary buttons are jumbo-sized and get scaled down on hover, the secondary buttons scale up on hover. Tertiary buttons, owing to their low-level importance, have a much milder animation on hover, and have a minimal footprint in terms of size as well.

## Data Fetching - CMS

I chose Hygraph CMS (previously known as GraphCMS) for hosting content since I was familiar with it, I really liked their GraphQL APIs, and the Hygraph online platform itself was very intuitive and easy to use. Obviously this is much easier than using a database, and Hygraph provides many controls for data types, conditions, etc. when you create a schema, similar to what you would find in a traditional SQL database. Since Hygraph is headless and markets itself as a federated content platform for web, mobile, and everything in between, it was a nice solution. (Almost) all content is fetched during build time (i.e., rendered server-side) -- this is a feature of React Server Components (RSC) which Next.js 13's app router enables. Pages that contain CMS data are built on the server-side during build time and served statically to the client when visited (this is not true for all pages -- the `/projects` route does not fetch data from the CMS as of now, for example). This has many benefits:

* No "loading" bars, icons, or text is required on the client side while data is being fetched.
* Number of API calls to Hygraph are reduced substantially.
* The data does not change often enough for real-time client-side fetching to make sense.

Similarly, the dynamic routes for the `/literature/[slug]` path are created using the Next.js function `getStaticParams()`, which creates all necessary dynamic routes in accordnance with the data stored in Hygraph. When the routes are created, data for each route is fetched using the server-side fetching+rendering method described above. This has major performance and speed upsides.

## (Upcoming Feature) Backend and Logic - Contact Form

There is no comprehensive backend, because for the most part there was not a reason to have one. The only major backend component is the `/contact route`, which is the `/app` router's version of a Next.js API route. This is for contact form submissions.

### How it Works

* The UI of the contact form is modelled after a mock iMessage UI, with most interactivity coming from a standard form, and state and input management done through a `useReducer` hook.
* When all the details have been collected from the form, the backend `/contact` API route is called via `POST`, which in turn fires a  call to Amazon SES (Simple Email Service) and sends a `FormData` object in the request body.
* In the API route, the `FormData` is parsed, and then combined into a standard barebones HTML email body to be send through SES to me.

### Key Decisions

* Why use Amazon SES? 
It is a low-stakes way of demonstrating my AWS knowledge. It is also fancy. I like using enterprise software. Jokes aside, it was also the cheapest service when you consider the fact that a lot of free form-to-email sending services like Formspree are restrictive in their free limits and have a higher monthly fee once you surpass the free tier. Also, SES opens the door to many more possibilites, customization, and control over what exactly happens.
* Why use an API route? Why not a direct API call fire to SES?
If someone on a browser (i.e., client side) looks enough, they can make out blocks of raw JavaScript even after Next.js compiles them into static files. This is not that big of a deal until you consider the fact that your environment variables can also get exposed to the client-side. Obviously, I do not want someone to gain access to my AWS Access Keys and Secret Keys. (Even if you did gain access to them, those keys are very restricted -- they only have IAM access to SES for sending emails, and I can rate-limit the access or rotate the keys at any time). 

(c) 2023 Vidit Khandelwal. All rights reserved. All wrongs reserved, too.
