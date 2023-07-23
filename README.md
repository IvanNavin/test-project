# Test Project - Senior React Developer

This project is a test task for the Senior React Developer position. The task involves building a React application that includes several components and handles form submissions with validation.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `yarn`.
3. Create a .env file in the root directory of the project.
4. Add the following line to the .env file:
   - VITE_GOOGLE_MAPS_API_KEY=AIzaSyC5s0xFZ4e_oRhoXcbiX-Zqf6Vwo8Jg3FE
5. Start the development server with `yarn dev`.

## Folder Structure

The project's folder structure is organized as follows:

- assets/
    - fonts/
        - Roboto-Medium.woff2
        - Roboto-Regular.woff2
        - index.ts
    - svg/
        - Bed.tsx
        - Decrement.tsx
        - Increment.tsx
- components/
    - MainComponent/
        - Bin/
            - index.tsx
        - Destination/
            - PlacesAutocomplete.tsx
            - TextBox.tsx
            - index.tsx
            - useDestination.ts
        - RoomAndGuests/
            - Counter.tsx
            - Room.tsx
            - calculateInputValue.tsx
            - index.tsx
            - useRoomAndGuests.ts
        - StayDates/
            - index.tsx
        - SwitchLocale/
            - index.tsx
        - constants.ts
        - index.tsx
        - schema.ts
        - types.ts
        - useMainComponent.ts
- hooks/
    - useTranslate.ts
- locales/
    - en.ts
    - he.ts
    - index.ts
- theme/
    - Input.ts
    - TextInput.ts
    - index.ts
- App.tsx
- index.css
- main.tsx

## Dependencies

The project uses the following dependencies:

- `@mantine/core`
- `@mantine/dates`
- `@mantine/form`
- `@mantine/hooks`
- `@react-google-maps/api`
- `tailwindcss`
- `use-places-autocomplete`
- `zod`

### Components and Hooks

1. `MainComponent` - The main component that includes sub-components for inputting data for hotel search and booking.

2. `Bin` - A component for entering payment system data.

3. `Destination` - A component for entering the hotel destination data. It includes `PlacesAutocomplete` and `TextBox`.

4. `PlacesAutocomplete` - A component that provides auto-completion for entering the hotel destination.

5. `TextBox` - A component for entering the hotel destination.

6. `RoomAndGuests` - A component for selecting the number of rooms and guests for hotel booking. It includes `Counter` and `Room`.

7. `Counter` - A component for changing the number of guests in a room.

8. `Room` - A component that represents a room for hotel booking.

9. `StayDates` - A component for selecting the stay dates in the hotel.

10. `SwitchLocale` - A component for changing the interface language.

11. `useTranslate` - A hook for getting localized texts.

### Localization

The project supports two languages: English (`en`) and Hebrew (`he`). Translations of texts are stored in the files `locales/en.ts` and `locales/he.ts`.

### File Structure

- `index.css` - Project styles.
- `main.tsx` - The entry point of the application.

Additional styles and themes are located in the `theme` folder.

### Assets

The `assets` folder contains image and font files used in the project.

## Usage

The application allows users to perform various actions related to room and guest selection, destination input, and stay dates. It supports localization for English and Hebrew languages.

## Localization

The project uses localized text in English and Hebrew. All translations can be found in the `locales` folder.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue.
