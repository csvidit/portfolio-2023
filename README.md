# Integrated Portfolio

It's here! My comprehensive portfolio spanning computer science, economics, and the creative arts is here. I call it my first-ever integrated portfolio, because never before have all of my academic (or otherwise) disciplines been in one cohesive website.

## Detailed Tech Stack

* Next.js app router
* Tailwind CSS
* Framer Motion
* Hygraph CMS (for papers and literature)
* Contentful CMS (for the engineering blog)
* Resend

## Website Structure

* `/` : Homepage. This is supposed to make accessible all the most crucial things you may need. A link to my about page? Yes. A link to a featured project? Yup. Links to the `projects` route? Tick. Links to major professional platforms like GitHub and LinkedIn? Check. If you landed up here, it can be a one-stop destination to my various social profiles and projects.
* `/about` : About Page. This is to show a bit of my personality, and my skills. It has a brief bio, some random trivia about me, information about the kinds of tech I use most regularly, my location (with a cool scrolling animation on the location icon), professional links (of course), and a from-scratch barebones media player to play Lavender Haze by Taylor Swift. Total vibe.
* `/experience` : Now maybe you don't want to look at my ATS-compliant resume. Here, you can look at things with a little more formatting.
* `/academics` : This is probably the place which differs the most from my resume. While academic information in my resume has very little real estate, I am able to thoroughly explain my collegiate career in this, including awards, GPA, full list of courses, and a detailed account of my study abroad experience at New College, University of Oxford. #oxonian.
* `/projects` : A long list of my projects, with icons to demonstate what all major blocks went into the tech stack of each project. I usually link all of them to my GitHub, but you are encouraged to look at live production versions of all my web apps, updated links to which are in their GitHub repositories.
* `/papers` : A list of select academic papers, with topic tags, publish dates, and an abstract. All paper cards link to the PDF of the paper, hosted on Hygraph CMS
* `/blog` or `/backslash` : My new upcoming blog. All cards link to `/blog/[slug]` dynamic routes that display the entire article in rich styled HTML.  All pathnames of the dynamic routes are generated at build time (using the Next.js reserved function export `getStaticParams()`), with all data fetched from Contentful CMS. Hence, there is no client-side calling of Contentful APIs to fetch the required post.
* `/literature` : A list of select poems and short stories, with tags, publish dates, and a description (if applicable). All cards link to `/literature/[slug]` dynamic routes that display the entire story/poem. All pathnames of the dynamic routes are generated at build time (using the Next.js reserved function export `getStaticParams()`), with all data fetched from Hygraph. Hence, there is no client-side calling of Hygraph APIs to fetch the required story/poem.
* `/photography` : A grid of high-quality versions of some of my favorite photos that I took, which do NOT include humans. All photos are fetched from my dedicated CMS endpoint. The quality is not 100% perfect -- since for the purposes of hosting and displaying I had to convert RAW, DNG, HEIC, and HDR images all to PNGs, but its mostly there. All photos are optimized thanks to `next/image` and the `<Image/>` component.
* `/api/revalidate` : Since all data is fetched during build time, how do we update the data on the web app when it is updated in the CMS? Simple. We call `/api/revalidate/[slug]` to revalidate the page with the `[slug]` route. For example, if I want to revalidate the `/blog` route, I can call `/api/revalidate/blog`, which will revalidate both the blog and the dynamic routes associated with it (this is not a given; I have set it up this way). The route handlers in turn call the Next.js function `revalidatePath(path)` which purges the data cache of the given path and re-fetches the data (or in a way, re-renders it on the server). This makes sure that both the benefits of SSR and fast data updates are realized. A secret in the header of all calls to `/api/revalidate` route handlers is required, so no one can misuse the route by bombarding it with POST requests unless they have the secret as well.

## UI/UX Details

### Main Layout

* Everything is arranged in a modular grid with 4 columns. Components vary throughout in width, but usually their length is 1 or 2 rows maximum. In a phone layout, everything is in a single column (in fact, the phone layout just uses vertical flexbox system). This makes sure that nothing looks too cramped in mobile view. Padding is significantly lesser in a phone layout, to maximize utilization of screen real estate. The grid system allows for maximum utilization of screen real estate on larger displays, and containers of different widths and heights breaks the monotony of a traditional fixed length and width grid container system, which often looks a little old school and corporate.

### Buttons

* Primary: The highest level of buttons take the shape and style of a grid element themselves. The current most-used top level button is `/src/app/components/MarqueeButton.tsx`
* Secondary: These buttons are placed inside of a grid element container, and are usually used as second-level call to action buttons within the page, and first-level call-to-actions within the grid element. The current most-used top level button is `/src/app/components/Index/ActionButton.tsx`
* Tertiary: These buttons are usually used for links that only some users would be interested in. They are second-level call to action buttons within a grid element and third-level call to action buttons within a page.

While the primary buttons are jumbo-sized and get scaled down on hover, the secondary buttons scale up on hover. Tertiary buttons, owing to their low-level importance, have a much milder animation on hover, and have a minimal footprint in terms of size as well.

### Colors

While the colors used may seem a little random at first, there is a reason for not using a single-color or dual-color design system.

#### Why not a single-color or dual color system?

I tried it. It looks very sad, and this portfolio is as much a depiction of my talents as it is of my slightly playful design philosophy. Moreover, my website has a lot of sections and pages, with varying degrees of relationship between each other.

#### Color System - The Federal Color System

* **Indigo**: The least used color. Mostly only for the site title (i.e, "Vidit Khandelwal" on the hero section) and the gradient background behind it. The purpose is to immediately attract attention. Also used for all personal context headings and subheadings, such as the heading of the `/about` route, and some subheadings which are about my personal interests and hobbies.
* **Blue**: For all professional contexts. For example, links to other professional websites such as LinkedIn or Read.CV (both `nonfocus` and `focus` variants of them in the `MarqueeButton` type) are in blue, and so are the headings and subheadings in the work experience section. Also used in the subheadings in the Mantras section in the `/about` route.
* **Violet**: For all technical contexts, such as projects, and link to my GitHub within the `/projects` route. Used for the hover states for all `ProjectItem` components, for the gradient in the `FeaturedProjectItem` component, and headings in the said route.
* **Red**: For all academic contexts. Used for all headings and subheadings in the `/academics` route, for both the `focus` and `nonfocus` variants of the link to Academic Papers in the `MarqueeButton` type, and for the headings and hover states in the `/papers` page. Also used for the subheading in the Academics section in the `/about` route.

Therefore, the purpose of this color system is to create a logical connection between specific sections or similar sections, so that they can both be part of the broader consistent design philosophy while having a somewhat distinct identity. I like to call it a **Federal Color System**, since all sections have a distinct color dedicated to them, while all being under the common umbrella of one comprehensive portfolio.

## Data Fetching - CMS

I chose Hygraph CMS (previously known as GraphCMS) for hosting content since I was familiar with it, I really liked their GraphQL APIs, and the Hygraph online platform itself was very intuitive and easy to use. Obviously this is much easier than using a database, and Hygraph provides many controls for data types, conditions, etc. when you create a schema, similar to what you would find in a traditional SQL database. Since Hygraph is headless and markets itself as a federated content platform for web, mobile, and everything in between, it was a nice solution. (Almost) all content is fetched during build time (i.e., rendered server-side) -- this is a feature of React Server Components (RSC) which Next.js 13's app router enables. Pages that contain CMS data are built on the server-side during build time and served statically to the client when visited (this is not true for all pages -- the `/projects` route does not fetch data from the CMS as of now, for example). This has many benefits:

* No "loading" bars, icons, or text is required on the client side while data is being fetched.
* Number of API calls to Hygraph are reduced substantially.
* The data does not change often enough for real-time client-side fetching to make sense.

Similarly, the dynamic routes for the `/literature/[slug]` and `/blog/[slug]` path are created using the Next.js function `getStaticParams()`, which creates all necessary dynamic routes in accordnance with the data stored in Hygraph. When the routes are created, data for each route is fetched using the server-side fetching+rendering method described above. This has major performance and speed upsides.

### How does data get updated then? Do you have to rebuild the whole app so that things get rendered again on the server?

That's what I had thought. But Next.js has an answer to it. It is called revalidating the data cache in server components. We can do it using the `revalidatePath` method in an API route, which can be called using a `POST` request which triggers a re-render of any route that is sent to the function as a parameter.

### Why not use CMS Schemas and data fetching for the `/projects` route and `ProjectItem` components?

The issue is that I want to display projects in a very specific order, and that order can change as projects evolve and new projects emerge. As a beginner/early intermediate GraphQL user, I have not figured out how I can give myself this kind of flexible (and granular control) over the order of items when returned using a GraphQL API call from Hygraph. Until an optimal solution is reached, the `/projects` route and content of it will be hardcoded in the form of a JavaScript object (which will be mapped into a component grid as with other content in routes elsewhere).

## *New Feature* Backend and Logic - Contact Form

There is no comprehensive backend, because for the most part there was not a reason to have one. The only major backend component is the `/contact` backend route handler, which is the `/app` router's version of a Next.js API route. This is for contact form submissions.

### How it Works

* The UI of the contact form is modelled after a mock iMessage UI, with most interactivity coming from a standard form, and state and input management done through a `useReducer` hook.
* When all the details have been collected from the form, the backend `/contact` route handler is called via `POST`, which in turn fires a call to Resend and sends the user's `name`, `email`, and `message` in the request body.
* In the API route, the request body is parsed and filled into a formatted email template. This email is then sent via a Resend reserved custom subdomain and my email address. Both the Resend reserved email address and Vidit Khandelwal's email address (where I would receive the form submissions) are stored as server-only environment variables which makes sure that these are never exposed to the client. 

### Key Decisions

* **Why use Resend?**
If you had read the README a while ago, you may have noticed that my initial design decision for the contact form involved using Amazon SES. This is why I did not use it:
  * Setting up SSL certificates for a custom domain and other required verifications was time consuming and hard to maintain.
  * Using SES only for contact forms was inefficient because it still required doing all the setting up and configuration, both in the project itself and in the AWS console. This was not worth it for a simple contact form-triggered email.
  * Resend was much more friendly, with a straightforward API, Next.js-specific documentation, and easy integration with other libraries such as react-email.
  * The admin console was much simpler since it did not have all the complexity of the AWS console.
  * The free-tier of Resend is VERY generous - 100 emails per day, 3,000 emails per month at no extra charge.
  * It provided all email and email body customization options that I required, and will require in the future.

* **Why use an API route? Why not a direct API call fire to Resend?** If someone on a browser (i.e., client side) looks enough, they can make out blocks of raw JavaScript even after Next.js compiles them into static files. This is not that big of a deal until you consider the fact that your environment variables can also get exposed to the client-side. Obviously, I do not want someone to gain access to my Resend keys, and use up my email limits or get access to the email addresses themselves.

* **But what about the performance and stability you were talking about with regards to AWS?** Fun fact, Resend is just a more beginner and developer-friendly abstraction over Amazon SES. So, I am getting the best of both worlds.

(c) 2023 Vidit Khandelwal. All rights reserved. All wrongs reserved, too.
