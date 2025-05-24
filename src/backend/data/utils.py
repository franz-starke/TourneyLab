import sys
import datetime
import traceback
from pathlib import Path

DATABASE_PATH = Path("data/databases")
LOG_PATH = Path("data/logs")
LOG_FORMAT = '%d.%m.%y %H-%M-%S'
DEBUG = True

class Error:
    def __init__(self, code: int, message: str) -> None:
        """
        Args:
            code (int): Numerical error code.
            message (str): Description of the error.
        """

        self.code = code
        self.message = message

class COLOR:
    """
    ANSI color codes for formatting terminal output.
    """

    CYAN = '\033[96m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    GRAY = '\033[90m'
    RESET = '\033[0m'
    CRITICAL = '\033[91m\033[1m\033[4m'

