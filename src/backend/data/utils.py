import os

DATABASE_PATH = os.path.join("data","databases")
DEBUG = True

class Error:
    def __init__(self,code:int,message:str) -> None:
        self.code = code
        self.message = message