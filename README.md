# Vitrine

Vitrine creates a place to showcase your digital projects. 

> I use this project to try out new tools and technologies like Supabase and Zustand.

## Stack

 - [Supabase](https://supabase.com/)
 - [React](https://reactjs.org/)
 - [Zustand](https://zustand-demo.pmnd.rs/)
 - [Mantine](https://mantine.dev/)
 - [AutoMapper Typescript](https://automapperts.netlify.app/)
 - [React Intl](https://formatjs.io/)

## Development

1. Make sure that you have a working [Visual Studio Code with Remote Containers](https://code.visualstudio.com/docs/remote/containers#_getting-started) configured.
1. Open the project in Visual Studio Code using Remote Containers.
1. Don't forget to set your Git name and email <br> `git config user.name <name>` and `git config user.email <email>`
1. Install dependencies <br> `yarn install`
1. Run supabase <br> `supabase start`
1. Add a `.env.local` with the variables shown in `.env.template`
1. Run the frontend development server <br> `yarn dev`

### Hints

 - Generate types from backend with <br> `supabase gen types typescript --local > supabase.d.ts`