FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

COPY . .

RUN pip install -r requirements.txt

RUN uvicorn main:app -- reload