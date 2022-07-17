# TodoBrew - Client
TodoBrew is a Todo app. TodoBrew Client is built using React 17. Project backbone is powered by React 17, Parcel, ESLint and Prettier and other libraries.

## Technology Used 
- React 17
- Parcel
- ESLint
- Prettier

## Commands
Dev Build: `npm run dev`

Prod Build: `npm run build`

Check if formatted (using prettier): `npm run format:check` 

Lint (using ESLint): `npm run lint`

## Version Management
It is requested to keep following procedures in mind while working on the project: 
- All features should be done at feature branches following this naming convention - `feature/feature-name`. Example - `feature/feed`.
- When a feature is done, a PR should be opened to develop branch. 
- When a develop branch is fruitful for a release, it should open a PR to next release branch. 
- Release candidates work will be done at release branches followwing this naming convention - `release/version`. Example - `release/1.0`.
- When a release branch is ready for production, it should open a PR to main branch with a tag of the version. 
- hotfixes branch will be just used for production bug fix and it should be merged back to develop and main branch.