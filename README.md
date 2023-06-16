## Flick Search

Flick Search is a web application that allows users to search for movies and get detailed information about them. It utilizes the [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started/) to fetch movie data.

![Flick Search Screenshot](/public/screenshots/screenshot.png)

### Features

-  Movie search: Enter a movie title to search for movies.
-  Movie details: Get detailed information about a specific movie, including title, year, genre, plot, and more.
-  Responsive design: The application is mobile-friendly and works well on different screen sizes.

### Demo

You can try out the live demo of Flick Search [here](https://amankashyap004.github.io/flick-search/).

### Installation

To run Flick Search locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/amankashyap004/flick-search.git
```

2. Navigate to the project directory:

```bash
cd flick-search
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root directory and add your TMDb API key:

```bash
VITE_API_TMDB_TOKEN=your_api_key
```

You can obtain an API key from the [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started/).

5. Start the development server:

```bash
npm run dev
```

6. Open the application in your browser at `localhost`.

### Technologies Used

-  React: JavaScript library for building user interfaces.
-  Axios: Promise-based HTTP client for making API requests.
-  React Router: Library for handling routing in a React application.
