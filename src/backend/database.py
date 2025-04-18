import sqlite3
import os

class Database:
    def __init__(self):
        pass

def create_tournament_db(tournament_id: str):
    # Stelle sicher, dass der Ordner für Datenbanken existiert
    db_folder = "databases.py"

    # Erstelle Pfad zur neuen DB
    db_path = os.path.join(db_folder, f"{tournament_id}.db")


    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Tabellenstruktur
    cursor.execute('''

    ''')


    conn.commit()
    conn.close()