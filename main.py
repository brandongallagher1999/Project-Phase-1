

from fastapi import FastAPI
from starlette.requests import Request
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

app = FastAPI()

app.mount("/react", StaticFiles(directory="."), name="static")

templates = Jinja2Templates(directory="./templates")

@app.get("/")
async def main(request: Request):

    return templates.TemplateResponse("index.html", {"request" : request})