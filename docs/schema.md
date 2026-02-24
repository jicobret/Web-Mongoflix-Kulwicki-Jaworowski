# Struktura movies.json:

Przykladowy film:

| Pole            | Typ danych    | Opis                       |
|-----------------|---------------|----------------------------|
| id              | Number        | Unikalne ID                |
| title           | String        | Tytuł filmu                |
| description     | String        | Opis filmu                 |
| genre           | Array[String] | Lista gatunkow filmu       |
| director        | Object        | Dane rezysera filmu        |
| cast            | Array[Object] | Lista aktorow              |
| durationMinutes | Number        | Dlugosc filmu (w minutach) |
| rating          | Object        | Srednia ocena filmu        |
| reviews         | Array[Object] | Lista recenzji             |
| views           | Number        | Liczba wyswietlen          |
|-----------------|---------------|----------------------------|