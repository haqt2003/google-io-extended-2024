# Google I/O Extended Hanoi 2024

Event information and registration website for **Google I/O Extended Hanoi 2024**, a community-led technology event organized by **Google Developer Group Hanoi (GDG Hanoi)** in Vietnam.

[View the live website](https://google-io-extended-2024.vercel.app/) · [Visit GDG Hanoi](https://gdghanoi.com/)

![Google I/O Extended Hanoi 2024](src/assets/images/OG-image-02.png)

> **Archive notice:** The event took place on July 6, 2024. The website remains online as an archive of the event experience; registration may no longer be available.

## About the event

Google I/O Extended brings the highlights of Google I/O to local developer communities. The 2024 Hanoi edition connected developers, technology professionals, students, and enthusiasts through technical talks, community activities, networking, and conversations with industry experts.

| | Event details |
| --- | --- |
| **Date and time** | July 6, 2024 · 13:00–18:00 |
| **Format** | In-person community event |
| **Venue** | Posts and Telecommunications Institute of Technology, 96A Trần Phú, Hà Đông, Hanoi, Vietnam |
| **Organizer** | Google Developer Group Hanoi |
| **Admission** | Free registration |

[View the venue on Google Maps](https://maps.app.goo.gl/xJbnVeKT6F7G6Gwo6)

## Website features

- Event overview, venue information, and calls to register
- Full agenda covering AI/ML, Android, Flutter, Google Cloud, and community activities
- Speaker and expert profiles with responsive desktop and mobile interactions
- Free-ticket registration form with validation and duplicate-email checking
- Dedicated **1:1 Meeting with Experts** program and registration flow
- Firebase-backed registration storage using Cloud Firestore and Realtime Database
- Privacy-policy content for attendee data collection
- Responsive layouts, custom loading experience, and branded 404 page
- Social sharing metadata, event structured data, and Google Analytics integration

## Technology stack

| Area | Technology |
| --- | --- |
| Frontend | Vue 3, Vue Router 4 |
| Styling | Tailwind CSS 3, custom CSS |
| Data | Firebase Cloud Firestore, Firebase Realtime Database |
| API client | Axios |
| Analytics | Google Analytics |
| Tooling | Vue CLI 5, Babel, ESLint, Prettier |
| Hosting | Vercel |

## Application routes

| Route | Purpose |
| --- | --- |
| `/` | Main event landing page and attendee registration |
| `/OneOneMeeting` | Expert profiles and 1:1 meeting registration |
| `/:pathMatch(.*)*` | Custom not-found page |

## Project structure

```text
.
├── public/                 # HTML template and public assets
├── src/
│   ├── api/                # External API calls, including email checks
│   ├── assets/             # Images, videos, and global styles
│   ├── components/         # Header, footer, agenda, sponsors, and loading UI
│   ├── composables/        # Firebase data-access helpers
│   ├── configs/            # Firebase client configuration
│   ├── constants/          # Shared application constants
│   ├── layouts/            # Default, meeting, and not-found layouts
│   ├── router/             # Vue Router configuration
│   ├── views/              # Event, 1:1 meeting, and 404 pages
│   ├── App.vue             # Root layout resolver
│   └── main.js             # Application entry point
├── package.json
├── tailwind.config.js
└── vue.config.js
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) — an active LTS release is recommended
- npm (included with Node.js) or Yarn

### Installation

```bash
git clone https://github.com/haqt2003/google-io-extended-2024.git
cd google-io-extended-2024
npm ci
```

Start the local development server:

```bash
npm run serve
```

Vue CLI prints the local URL after compilation, typically `http://localhost:8080`.

If you prefer Yarn, run `yarn install` and `yarn serve` instead. Use one package manager consistently when changing dependencies.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run serve` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run lint` | Check and automatically fix supported lint issues |

## Firebase and external services

The website uses Firebase to store event and 1:1 meeting registrations. The existing Firebase client setup is located in `src/configs/firebase.js`, while `src/api/checkMail.js` calls a deployed Cloud Function to check whether an email has already been registered.

When creating your own deployment:

1. Create a Firebase project and enable the required databases.
2. Replace the Firebase web-app configuration in `src/configs/firebase.js`.
3. Deploy an equivalent email-check endpoint and update its URL in `src/api/checkMail.js`.
4. Configure appropriate Firebase Security Rules, authorized domains, API-key restrictions, and analytics settings.

Firebase web configuration identifies a client application and is not treated like a server-side secret, but database access must still be protected by correctly scoped Security Rules.

## Production build and deployment

Create a production bundle with:

```bash
npm run build
```

The generated `dist/` directory can be deployed to Vercel, Firebase Hosting, Netlify, or another static hosting provider. Because the application uses Vue Router history mode, configure the host to route unknown paths back to `index.html`.

## Credits

- Event organizer: [GDG Hanoi](https://gdghanoi.com/)
- Global developer resources: [Google for Developers](https://developers.google.com/)
- Repository maintainer: [@haqt2003](https://github.com/haqt2003)

Google I/O Extended events are community-led extensions of Google I/O. Google and Google I/O are trademarks of Google LLC.

## License

This repository does not currently include an open-source license. Please contact the repository owner before reusing the source code, design, or event assets.
