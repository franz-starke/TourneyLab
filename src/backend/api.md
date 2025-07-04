## API Documentation

  * api
  * server
  * origins
  * handle_error
  * create_tournament
  * get_tournaments
  * get_field_games
  * get_game_score
  * set_game_score
  * get_tournament_details

[ built with pdoc![pdoc
logo](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20role%3D%22img%22%20aria-
label%3D%22pdoc%20logo%22%20width%3D%22300%22%20height%3D%22150%22%20viewBox%3D%22-1%200%2060%2030%22%3E%3Ctitle%3Epdoc%3C/title%3E%3Cpath%20d%3D%22M29.621%2021.293c-.011-.273-.214-.475-.511-.481a.5.5%200%200%200-.489.503l-.044%201.393c-.097.551-.695%201.215-1.566%201.704-.577.428-1.306.486-2.193.182-1.426-.617-2.467-1.654-3.304-2.487l-.173-.172a3.43%203.43%200%200%200-.365-.306.49.49%200%200%200-.286-.196c-1.718-1.06-4.931-1.47-7.353.191l-.219.15c-1.707%201.187-3.413%202.131-4.328%201.03-.02-.027-.49-.685-.141-1.763.233-.721.546-2.408.772-4.076.042-.09.067-.187.046-.288.166-1.347.277-2.625.241-3.351%201.378-1.008%202.271-2.586%202.271-4.362%200-.976-.272-1.935-.788-2.774-.057-.094-.122-.18-.184-.268.033-.167.052-.339.052-.516%200-1.477-1.202-2.679-2.679-2.679-.791%200-1.496.352-1.987.9a6.3%206.3%200%200%200-1.001.029c-.492-.564-1.207-.929-2.012-.929-1.477%200-2.679%201.202-2.679%202.679A2.65%202.65%200%200%200%20.97%206.554c-.383.747-.595%201.572-.595%202.41%200%202.311%201.507%204.29%203.635%205.107-.037.699-.147%202.27-.423%203.294l-.137.461c-.622%202.042-2.515%208.257%201.727%2010.643%201.614.908%203.06%201.248%204.317%201.248%202.665%200%204.492-1.524%205.322-2.401%201.476-1.559%202.886-1.854%206.491.82%201.877%201.393%203.514%201.753%204.861%201.068%202.223-1.713%202.811-3.867%203.399-6.374.077-.846.056-1.469.054-1.537zm-4.835%204.313c-.054.305-.156.586-.242.629-.034-.007-.131-.022-.307-.157-.145-.111-.314-.478-.456-.908.221.121.432.25.675.355.115.039.219.051.33.081zm-2.251-1.238c-.05.33-.158.648-.252.694-.022.001-.125-.018-.307-.157-.217-.166-.488-.906-.639-1.573.358.344.754.693%201.198%201.036zm-3.887-2.337c-.006-.116-.018-.231-.041-.342.635.145%201.189.368%201.599.625.097.231.166.481.174.642-.03.049-.055.101-.067.158-.046.013-.128.026-.298.004-.278-.037-.901-.57-1.367-1.087zm-1.127-.497c.116.306.176.625.12.71-.019.014-.117.045-.345.016-.206-.027-.604-.332-.986-.695.41-.051.816-.056%201.211-.031zm-4.535%201.535c.209.22.379.47.358.598-.006.041-.088.138-.351.234-.144.055-.539-.063-.979-.259a11.66%2011.66%200%200%200%20.972-.573zm.983-.664c.359-.237.738-.418%201.126-.554.25.237.479.548.457.694-.006.042-.087.138-.351.235-.174.064-.694-.105-1.232-.375zm-3.381%201.794c-.022.145-.061.29-.149.401-.133.166-.358.248-.69.251h-.002c-.133%200-.306-.26-.45-.621.417.091.854.07%201.291-.031zm-2.066-8.077a4.78%204.78%200%200%201-.775-.584c.172-.115.505-.254.88-.378l-.105.962zm-.331%202.302a10.32%2010.32%200%200%201-.828-.502c.202-.143.576-.328.984-.49l-.156.992zm-.45%202.157l-.701-.403c.214-.115.536-.249.891-.376a11.57%2011.57%200%200%201-.19.779zm-.181%201.716c.064.398.194.702.298.893-.194-.051-.435-.162-.736-.398.061-.119.224-.3.438-.495zM8.87%204.141c0%20.152-.123.276-.276.276s-.275-.124-.275-.276.123-.276.276-.276.275.124.275.276zm-.735-.389a1.15%201.15%200%200%200-.314.783%201.16%201.16%200%200%200%201.162%201.162c.457%200%20.842-.27%201.032-.653.026.117.042.238.042.362a1.68%201.68%200%200%201-1.679%201.679%201.68%201.68%200%200%201-1.679-1.679c0-.843.626-1.535%201.436-1.654zM5.059%205.406A1.68%201.68%200%200%201%203.38%207.085a1.68%201.68%200%200%201-1.679-1.679c0-.037.009-.072.011-.109.21.3.541.508.935.508a1.16%201.16%200%200%200%201.162-1.162%201.14%201.14%200%200%200-.474-.912c.015%200%20.03-.005.045-.005.926.001%201.679.754%201.679%201.68zM3.198%204.141c0%20.152-.123.276-.276.276s-.275-.124-.275-.276.123-.276.276-.276.275.124.275.276zM1.375%208.964c0-.52.103-1.035.288-1.52.466.394%201.06.64%201.717.64%201.144%200%202.116-.725%202.499-1.738.383%201.012%201.355%201.738%202.499%201.738.867%200%201.631-.421%202.121-1.062.307.605.478%201.267.478%201.942%200%202.486-2.153%204.51-4.801%204.51s-4.801-2.023-4.801-4.51zm24.342%2019.349c-.985.498-2.267.168-3.813-.979-3.073-2.281-5.453-3.199-7.813-.705-1.315%201.391-4.163%203.365-8.423.97-3.174-1.786-2.239-6.266-1.261-9.479l.146-.492c.276-1.02.395-2.457.444-3.268a6.11%206.11%200%200%200%201.18.115%206.01%206.01%200%200%200%202.536-.562l-.006.175c-.802.215-1.848.612-2.021%201.25-.079.295.021.601.274.837.219.203.415.364.598.501-.667.304-1.243.698-1.311%201.179-.02.144-.022.507.393.787.213.144.395.26.564.365-1.285.521-1.361.96-1.381%201.126-.018.142-.011.496.427.746l.854.489c-.473.389-.971.914-.999%201.429-.018.278.095.532.316.713.675.556%201.231.721%201.653.721.059%200%20.104-.014.158-.02.207.707.641%201.64%201.513%201.64h.013c.8-.008%201.236-.345%201.462-.626.173-.216.268-.457.325-.692.424.195.93.374%201.372.374.151%200%20.294-.021.423-.068.732-.27.944-.704.993-1.021.009-.061.003-.119.002-.179.266.086.538.147.789.147.15%200%20.294-.021.423-.069.542-.2.797-.489.914-.754.237.147.478.258.704.288.106.014.205.021.296.021.356%200%20.595-.101.767-.229.438.435%201.094.992%201.656%201.067.106.014.205.021.296.021a1.56%201.56%200%200%200%20.323-.035c.17.575.453%201.289.866%201.605.358.273.665.362.914.362a.99.99%200%200%200%20.421-.093%201.03%201.03%200%200%200%20.245-.164c.168.428.39.846.68%201.068.358.273.665.362.913.362a.99.99%200%200%200%20.421-.093c.317-.148.512-.448.639-.762.251.157.495.257.726.257.127%200%20.25-.024.37-.071.427-.17.706-.617.841-1.314.022-.015.047-.022.068-.038.067-.051.133-.104.196-.159-.443%201.486-1.107%202.761-2.086%203.257zM8.66%209.925a.5.5%200%201%200-1%200c0%20.653-.818%201.205-1.787%201.205s-1.787-.552-1.787-1.205a.5.5%200%201%200-1%200c0%201.216%201.25%202.205%202.787%202.205s2.787-.989%202.787-2.205zm4.4%2015.965l-.208.097c-2.661%201.258-4.708%201.436-6.086.527-1.542-1.017-1.88-3.19-1.844-4.198a.4.4%200%200%200-.385-.414c-.242-.029-.406.164-.414.385-.046%201.249.367%203.686%202.202%204.896.708.467%201.547.7%202.51.7%201.248%200%202.706-.392%204.362-1.174l.185-.086a.4.4%200%200%200%20.205-.527c-.089-.204-.326-.291-.527-.206zM9.547%202.292c.093.077.205.114.317.114a.5.5%200%200%200%20.318-.886L8.817.397a.5.5%200%200%200-.703.068.5.5%200%200%200%20.069.703l1.364%201.124zm-7.661-.065c.086%200%20.173-.022.253-.068l1.523-.893a.5.5%200%200%200-.506-.863l-1.523.892a.5.5%200%200%200-.179.685c.094.158.261.247.432.247z%22%20transform%3D%22matrix%28-1%200%200%201%2058%200%29%22%20fill%3D%22%233bb300%22/%3E%3Cpath%20d%3D%22M.3%2021.86V10.18q0-.46.02-.68.04-.22.18-.5.28-.54%201.34-.54%201.06%200%201.42.28.38.26.44.78.76-1.04%202.38-1.04%201.64%200%203.1%201.54%201.46%201.54%201.46%203.58%200%202.04-1.46%203.58-1.44%201.54-3.08%201.54-1.64%200-2.38-.92v4.04q0%20.46-.04.68-.02.22-.18.5-.14.3-.5.42-.36.12-.98.12-.62%200-1-.12-.36-.12-.52-.4-.14-.28-.18-.5-.02-.22-.02-.68zm3.96-9.42q-.46.54-.46%201.18%200%20.64.46%201.18.48.52%201.2.52.74%200%201.24-.52.52-.52.52-1.18%200-.66-.48-1.18-.48-.54-1.26-.54-.76%200-1.22.54zm14.741-8.36q.16-.3.54-.42.38-.12%201-.12.64%200%201.02.12.38.12.52.42.16.3.18.54.04.22.04.68v11.94q0%20.46-.04.7-.02.22-.18.5-.3.54-1.7.54-1.38%200-1.54-.98-.84.96-2.34.96-1.8%200-3.28-1.56-1.48-1.58-1.48-3.66%200-2.1%201.48-3.68%201.5-1.58%203.28-1.58%201.48%200%202.3%201v-4.2q0-.46.02-.68.04-.24.18-.52zm-3.24%2010.86q.52.54%201.26.54.74%200%201.22-.54.5-.54.5-1.18%200-.66-.48-1.22-.46-.56-1.26-.56-.8%200-1.28.56-.48.54-.48%201.2%200%20.66.52%201.2zm7.833-1.2q0-2.4%201.68-3.96%201.68-1.56%203.84-1.56%202.16%200%203.82%201.56%201.66%201.54%201.66%203.94%200%201.66-.86%202.96-.86%201.28-2.1%201.9-1.22.6-2.54.6-1.32%200-2.56-.64-1.24-.66-2.1-1.92-.84-1.28-.84-2.88zm4.18%201.44q.64.48%201.3.48.66%200%201.32-.5.66-.5.66-1.48%200-.98-.62-1.46-.62-.48-1.34-.48-.72%200-1.34.5-.62.5-.62%201.48%200%20.96.64%201.46zm11.412-1.44q0%20.84.56%201.32.56.46%201.18.46.64%200%201.18-.36.56-.38.9-.38.6%200%201.46%201.06.46.58.46%201.04%200%20.76-1.1%201.42-1.14.8-2.8.8-1.86%200-3.58-1.34-.82-.64-1.34-1.7-.52-1.08-.52-2.36%200-1.3.52-2.34.52-1.06%201.34-1.7%201.66-1.32%203.54-1.32.76%200%201.48.22.72.2%201.06.4l.32.2q.36.24.56.38.52.4.52.92%200%20.5-.42%201.14-.72%201.1-1.38%201.1-.38%200-1.08-.44-.36-.34-1.04-.34-.66%200-1.24.48-.58.48-.58%201.34z%22%20fill%3D%22green%22/%3E%3C/svg%3E)
](https://pdoc.dev "pdoc: Python API documentation generator")

#  api

View Source

    
    
      1import data.utils as utils
      2
      3from fastapi import FastAPI, HTTPException
      4from fastapi.middleware.cors import CORSMiddleware
      5
      6from server import Server
      7from data.apiobjects.apiobjects import CreateTournament, ScoreUpdate
      8
      9# Create FastAPI and server instance
     10api = FastAPI()
     11server = Server()
     12
     13# Only allowed origins to access the api
     14origins = ["*"]
     15
     16# Add CORS middleware to allow cross-origin requests
     17api.add_middleware(
     18    CORSMiddleware,
     19    allow_origins=origins,
     20    allow_credentials=True,
     21    allow_methods=["*"],
     22    allow_headers=["*"],
     23)
     24
     25utils.LOGGER.info("Started API")
     26
     27
     28def handle_error(result) -> dict | utils.Error:
     29    """
     30    Converts an `Error` object into an HTTPException.
     31
     32    Args:
     33        result: The result returned by a server method.
     34
     35    Returns:
     36        The original result if it's not an Error.
     37
     38    Raises:
     39        HTTPException: If result is an instance of utils.Error.
     40    """
     41    if result is None:
     42        raise HTTPException(status_code=500, detail="Unexpected None response.")
     43
     44    if isinstance(result, utils.Error):
     45        raise HTTPException(status_code=result.code, detail=result.message)
     46    return result
     47
     48
     49@api.post("/api/create", summary="Create a new tournament")
     50def create_tournament(data: CreateTournament):
     51    """
     52    Creates a new tournament to be played.
     53
     54    Args:
     55        data (CreateTournament): Tournament creation data from client.
     56
     57    Returns:
     58        The tournament ID for the new tournament.
     59    """
     60
     61    # Logging for future debugging
     62    if utils.DEBUG:
     63        utils.LOGGER.info(f"API request to create a new tournament | {data}")
     64
     65    # Create new tournament entry in server
     66    for variable in data:
     67        if isinstance(variable[1], utils.Error):
     68            return handle_error(variable[1])
     69    result = server.create_tournament(
     70        data.name, data.date, data.teams, data.games, data.matchpoint)
     71    result = handle_error(result)
     72    return {"tournament_id": result}
     73
     74
     75@api.get("/api/tournaments", summary="List all tournaments")
     76def get_tournaments():
     77    """
     78    Get all old tournaments, that have been created.
     79
     80    Returns:
     81        A list of all tournaments that have been created.
     82    """
     83
     84    # Logging for future debugging
     85    if utils.DEBUG:
     86        utils.LOGGER.info("API request to list all tournaments.")
     87
     88    # Fetch data for all tournaments
     89    result = server.get_tournaments()
     90    result = handle_error(result)
     91    return {"tournaments": result}
     92
     93
     94@api.get("/api/{tournament_id}/fields/{field_id}", summary="Get all games for a specific field")
     95def get_field_games(tournament_id: str, field_id: str):
     96    """
     97    Get all games from a field.
     98
     99    Args:
    100        tournament_id (str): Unique ID of the tournament.
    101        field_id (str): Field identifier.
    102
    103    Returns:
    104        All games that are connected with this field.
    105    """
    106
    107    # Logging for future debugging
    108    if utils.DEBUG:
    109        utils.LOGGER.info(
    110            f"API request to get all games from a field | {tournament_id} | {field_id}")
    111
    112    # Fetch data for all games in field
    113    result = server.get_games_from_field(tournament_id, field_id)
    114    result = handle_error(result)
    115    return {"games": result}
    116
    117
    118@api.get("/api/{tournament_id}/game/{game_id}", summary="Get the score of a specific game")
    119def get_game_score(tournament_id: str, game_id: str):
    120    """
    121    Gets the current score for a game.
    122
    123    Args:
    124        tournament_id (str): Unique ID of the tournament.
    125        game_id (str): Unique ID of the game.
    126
    127    Returns:
    128        The game score.
    129    """
    130
    131    # Logging for future debugging
    132    if utils.DEBUG:
    133        utils.LOGGER.info(
    134            f"API request to get the score for a game | {tournament_id} | {game_id}")
    135
    136    # Fetch data for score
    137    result = server.get_game_score(tournament_id, game_id)
    138    result = handle_error(result)
    139    return {"score": result}
    140
    141
    142@api.put("/api/{tournament_id}/game/{game_id}", summary="Update the score of a game")
    143def set_game_score(tournament_id: str, game_id: str, data: ScoreUpdate):
    144    """
    145    Edit a specific game score.
    146
    147    Args:
    148        tournament_id (str): Unique ID of the tournament.
    149        game_id (str): Unique ID of the game.
    150        data (ScoreUpdate): The new score data.
    151
    152    Returns:
    153        A status code for the score change.
    154    """
    155
    156    # Logging for future debugging
    157    if utils.DEBUG:
    158        utils.LOGGER.info(
    159            f"API request to change the score of a game | {tournament_id} | {data.score}")
    160
    161    # Change score for game
    162    if isinstance(data.score, utils.Error):
    163        return handle_error(data.score)
    164    result = server.set_game_score(tournament_id, game_id, data.score)
    165    result = handle_error(result)
    166    return {"status_code": 200, "detail": "Updated game score"}
    167
    168
    169@api.get("/api/{tournament_id}/details", summary="Get detailed tournament data")
    170def get_tournament_details(tournament_id: str):
    171    """
    172    Gets the details of a tournament.
    173
    174    Args:
    175        tournament_id (str): Unique ID of the tournament.
    176
    177    Returns:
    178        All data for the already played tournament.
    179    """
    180
    181    # Logging for future debugging
    182    if utils.DEBUG:
    183        utils.LOGGER.info(
    184            f"API request to get tournament details | {tournament_id}")
    185
    186    # Fetch data for tournament
    187    result = server.get_tournament_details(tournament_id)
    188    result = handle_error(result)
    189    return result
    

api = <fastapi.applications.FastAPI object>

server = <server.Server object>

origins = ['*']

def handle_error(result) -> dict | data.utils.Error: View Source
    
    
    29def handle_error(result) -> dict | utils.Error:
    30    """
    31    Converts an `Error` object into an HTTPException.
    32
    33    Args:
    34        result: The result returned by a server method.
    35
    36    Returns:
    37        The original result if it's not an Error.
    38
    39    Raises:
    40        HTTPException: If result is an instance of utils.Error.
    41    """
    42    if result is None:
    43        raise HTTPException(status_code=500, detail="Unexpected None response.")
    44
    45    if isinstance(result, utils.Error):
    46        raise HTTPException(status_code=result.code, detail=result.message)
    47    return result
    

Converts an `Error` object into an HTTPException.

Args: result: The result returned by a server method.

Returns: The original result if it's not an Error.

Raises: HTTPException: If result is an instance of utils.Error.

@api.post('/api/create', summary='Create a new tournament')

def create_tournament(data: data.apiobjects.apiobjects.CreateTournament): View
Source

    
    
    50@api.post("/api/create", summary="Create a new tournament")
    51def create_tournament(data: CreateTournament):
    52    """
    53    Creates a new tournament to be played.
    54
    55    Args:
    56        data (CreateTournament): Tournament creation data from client.
    57
    58    Returns:
    59        The tournament ID for the new tournament.
    60    """
    61
    62    # Logging for future debugging
    63    if utils.DEBUG:
    64        utils.LOGGER.info(f"API request to create a new tournament | {data}")
    65
    66    # Create new tournament entry in server
    67    for variable in data:
    68        if isinstance(variable[1], utils.Error):
    69            return handle_error(variable[1])
    70    result = server.create_tournament(
    71        data.name, data.date, data.teams, data.games, data.matchpoint)
    72    result = handle_error(result)
    73    return {"tournament_id": result}
    

Creates a new tournament to be played.

Args: data (CreateTournament): Tournament creation data from client.

Returns: The tournament ID for the new tournament.

@api.get('/api/tournaments', summary='List all tournaments')

def get_tournaments(): View Source

    
    
    76@api.get("/api/tournaments", summary="List all tournaments")
    77def get_tournaments():
    78    """
    79    Get all old tournaments, that have been created.
    80
    81    Returns:
    82        A list of all tournaments that have been created.
    83    """
    84
    85    # Logging for future debugging
    86    if utils.DEBUG:
    87        utils.LOGGER.info("API request to list all tournaments.")
    88
    89    # Fetch data for all tournaments
    90    result = server.get_tournaments()
    91    result = handle_error(result)
    92    return {"tournaments": result}
    

Get all old tournaments, that have been created.

Returns: A list of all tournaments that have been created.

@api.get('/api/{tournament_id}/fields/{field_id}', summary='Get all games for
a specific field')

def get_field_games(tournament_id: str, field_id: str): View Source

    
    
     95@api.get("/api/{tournament_id}/fields/{field_id}", summary="Get all games for a specific field")
     96def get_field_games(tournament_id: str, field_id: str):
     97    """
     98    Get all games from a field.
     99
    100    Args:
    101        tournament_id (str): Unique ID of the tournament.
    102        field_id (str): Field identifier.
    103
    104    Returns:
    105        All games that are connected with this field.
    106    """
    107
    108    # Logging for future debugging
    109    if utils.DEBUG:
    110        utils.LOGGER.info(
    111            f"API request to get all games from a field | {tournament_id} | {field_id}")
    112
    113    # Fetch data for all games in field
    114    result = server.get_games_from_field(tournament_id, field_id)
    115    result = handle_error(result)
    116    return {"games": result}
    

Get all games from a field.

Args: tournament_id (str): Unique ID of the tournament. field_id (str): Field
identifier.

Returns: All games that are connected with this field.

@api.get('/api/{tournament_id}/game/{game_id}', summary='Get the score of a
specific game')

def get_game_score(tournament_id: str, game_id: str): View Source

    
    
    119@api.get("/api/{tournament_id}/game/{game_id}", summary="Get the score of a specific game")
    120def get_game_score(tournament_id: str, game_id: str):
    121    """
    122    Gets the current score for a game.
    123
    124    Args:
    125        tournament_id (str): Unique ID of the tournament.
    126        game_id (str): Unique ID of the game.
    127
    128    Returns:
    129        The game score.
    130    """
    131
    132    # Logging for future debugging
    133    if utils.DEBUG:
    134        utils.LOGGER.info(
    135            f"API request to get the score for a game | {tournament_id} | {game_id}")
    136
    137    # Fetch data for score
    138    result = server.get_game_score(tournament_id, game_id)
    139    result = handle_error(result)
    140    return {"score": result}
    

Gets the current score for a game.

Args: tournament_id (str): Unique ID of the tournament. game_id (str): Unique
ID of the game.

Returns: The game score.

@api.put('/api/{tournament_id}/game/{game_id}', summary='Update the score of a
game')

def set_game_score( tournament_id: str, game_id: str, data:
data.apiobjects.apiobjects.ScoreUpdate): View Source

    
    
    143@api.put("/api/{tournament_id}/game/{game_id}", summary="Update the score of a game")
    144def set_game_score(tournament_id: str, game_id: str, data: ScoreUpdate):
    145    """
    146    Edit a specific game score.
    147
    148    Args:
    149        tournament_id (str): Unique ID of the tournament.
    150        game_id (str): Unique ID of the game.
    151        data (ScoreUpdate): The new score data.
    152
    153    Returns:
    154        A status code for the score change.
    155    """
    156
    157    # Logging for future debugging
    158    if utils.DEBUG:
    159        utils.LOGGER.info(
    160            f"API request to change the score of a game | {tournament_id} | {data.score}")
    161
    162    # Change score for game
    163    if isinstance(data.score, utils.Error):
    164        return handle_error(data.score)
    165    result = server.set_game_score(tournament_id, game_id, data.score)
    166    result = handle_error(result)
    167    return {"status_code": 200, "detail": "Updated game score"}
    

Edit a specific game score.

Args: tournament_id (str): Unique ID of the tournament. game_id (str): Unique
ID of the game. data (ScoreUpdate): The new score data.

Returns: A status code for the score change.

@api.get('/api/{tournament_id}/details', summary='Get detailed tournament
data')

def get_tournament_details(tournament_id: str): View Source

    
    
    170@api.get("/api/{tournament_id}/details", summary="Get detailed tournament data")
    171def get_tournament_details(tournament_id: str):
    172    """
    173    Gets the details of a tournament.
    174
    175    Args:
    176        tournament_id (str): Unique ID of the tournament.
    177
    178    Returns:
    179        All data for the already played tournament.
    180    """
    181
    182    # Logging for future debugging
    183    if utils.DEBUG:
    184        utils.LOGGER.info(
    185            f"API request to get tournament details | {tournament_id}")
    186
    187    # Fetch data for tournament
    188    result = server.get_tournament_details(tournament_id)
    189    result = handle_error(result)
    190    return result
    

Gets the details of a tournament.

Args: tournament_id (str): Unique ID of the tournament.

Returns: All data for the already played tournament.

