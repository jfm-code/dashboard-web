# Dashboard Webv
This project is a web-based dashboard built using Next.js for the frontend and Django for the backend. The dashboard features multiple charts (Line Chart, Bar Chart, Pie Chart, and Candlestick Chart), with data fetched from a Django API.

The frontend is developed using TypeScript for type safety and better development experience.
The github repo of this project can also be found at: https://github.com/jfm-code/dashboard-web

## Project Setup
### Backend Setup (Django)
1. Create a Virtual Environment, have Django and Django REST Framework installed:
```
# Create a virtual environment
python -m venv env

# Activate the virtual environment (Windows)
source env\Scripts\activate

# Install the necessary Python packages
pip install django djangorestframework
```

2. Run the backend, fix errors if have:
```
python manage.py runserver

# Use this command if there is an migration error:
python manage.py migrate

# Install this to fix the CORS issue:
pip install django-cors-headers
```
Note: dont forget to change your localhost port in settings.py

### Frontend Setup (Next.js with TypeScript)
1. Install necessary libraries:
```
npm install
npm install react-chartjs-2 chart.js axios highcharts highcharts-react-official
```
Note:
- react-chartjs-2 is a React wrapper for Chart.js.
- chart.js is the charting library.
- axios is used to make HTTP requests to your Django API.

2. Run the frontend:
```
npm run dev
```
Note:
- for line chart, bar chart and pie chart, use react-chartjs-2 chart.js
- for candlestick, use highcharts highcharts-react-official

## Explanation of Approach
### Backend:
Django was chosen as the backend to create a REST API using the Django REST Framework. The data for each chart (line, bar, pie, and candlestick) is served by dedicated API endpoints.

Also using Django is fast as it's easier to start coding in python than other languages.

The django-cors-headers was used to manage CORS issues to ensure smooth communication between the frontend (running on a different port) and the backend.

### Frontend:
Next.js was selected for its ease of setup, built-in server-side rendering (SSR), and performance optimizations.

The frontend was built with TypeScript to ensure type safety, making the development process smoother and catching potential issues early.

react-chartjs-2 and Chart.js were used for most charts (line, bar, pie) as they are lightweight and easy to integrate.

Highcharts was chosen for the candlestick chart because Chart.js does not natively support candlestick charts, and Highcharts provides more robust support for financial charts.

Tailwind CSS was used to style the dashboard quickly and responsively using utility classes.

## Future Enhancements
- Authentication: Add user authentication for secure access to the dashboard.
- Additional Charts: Expand the number of available charts or make them more configurable by users. Then create more buttons to go to different pages where each chart will be located, or classify the charts according to their content.
- Improve the UI with better styling, using modern UI components for a smoother user experience.