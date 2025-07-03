# Utils

This module provides helper classes and constants for logging, error reporting, and file path management.

## Constants

### `DATABASE_PATH`

* **Type**: `WindowsPath`
* **Description**: Directory path for storing SQLite database files.
* **Default**: `'data/databases'`

### `LOG_PATH`

* **Type**: `WindowsPath`
* **Description**: Directory path for storing application log files.
* **Default**: `'data/logs'`

### `LOG_FORMAT`

* **Type**: `str`
* **Description**: Timestamp format used in log entries.
* **Default**: `'%d.%m.%y %H-%M-%S'`

### `DEBUG`

* **Type**: `bool`
* **Description**: Enables debug mode when `True`.
* **Default**: `True`

## Class: `Error`

Encapsulates error details to be returned or raised by other modules.

### Attributes

* `code` (`int`): Numeric error code.
* `message` (`str`): Descriptive error message.

## Class: `COLOR`

Defines ANSI escape codes used for formatting terminal output with colors.

### Attributes

* `CYAN` (`str`): Light cyan color (`'\x1b[96m'`)
* `YELLOW` (`str`): Yellow color (`'\x1b[93m'`)
* `RED` (`str`): Red color (`'\x1b[91m'`)
* `GRAY` (`str`): Gray color (`'\x1b[90m'`)
* `RESET` (`str`): Resets formatting (`'\x1b[0m'`)
* `CRITICAL` (`str`): Bright red, bold, and underlined (`'\x1b[91m\x1b[1m\x1b[4m'`)

## Class: `Logger`

Handles logging of messages to a rotating file and terminal with optional formatting.

### Logger

```python
Logger()
```

* Ensures the log directory exists.
* Backs up any existing `latest.log` file.
* Creates a new empty `latest.log`.

### Function: `info`

```python
def info(self, message: str = ''):
```

Logs an informational message.

* **Args**:

  * `message` (`str`): The message to log.

### Function: `warning`

```python
def warning(self, message: str = ''):
```

Logs a warning message.

* **Args**:

  * `message` (`str`): The message to log.

### Function: `error`

```python
def error(self, message: str = ''):
```

Logs an error message along with the most recent exception traceback, if available.

* **Args**:

  * `message` (`str`): Optional message to include with the traceback.

## Global Instance

### `LOGGER`

* **Type**: `Logger`
* **Description**: Pre-instantiated logger object for global use in the application.