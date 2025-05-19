import os

DATABASE_PATH = os.path.join("data","databases")
DEBUG = True

class Error:
    def __init__(self,code:int,message:str) -> None:
        self.code = code
        self.message = message

class Color:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def log(message:str|Exception):
    print(str(message))