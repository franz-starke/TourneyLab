import fastapi
from data.apiobjects import apiobjects
from fastapi.middleware.cors import CORSMiddleware

api = fastapi.FastAPI()

@api.get("/")
def get_main():
    return {"games":[]}