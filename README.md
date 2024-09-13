# dashboard-web
When you clone this repo from https://github.com/jfm-code/dashboard-web.git, the first thing you need to do is check if you install django or not, if not then:
python -m venv env
source env\Scripts\activate (for windows only)
pip install django djangorestframework

install this to fix the cors issue
pip install django-cors-headers


## backend
dont forget to change your localhost port in settings.py
to run: python manage.py runserver
if get "You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s)" then run migrate command: python manage.py migrate

## frontend
had to install these for frontend
- react-chartjs-2 is a React wrapper for Chart.js.
- chart.js is the charting library.
- axios is used to make HTTP requests to your Django API.