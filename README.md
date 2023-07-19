# PlaceNL-Docker

This is the [PlaceNL autoplacer](https://github.com/PlaceNL/Userscript) wrapped in a Docker container with Firefox and Tampermonkey.

## Setup

1. Download this repo.
1. Run `docker compose up -d`. You might have to use `sudo` for this.
1. Open http://localhost:5800.
1. Wait a couple seconds, until tampermonkey pops up with a install button.
1. Click that button -_-
1. Open the already-opened reddit tab, and log in.
1. Navigate to the r/place canvas.

This should be it.

## Note

As this code is written before the canvas has been opened, the URL isn't yet known. In docker-compose.yml `https://reddit.com/r/placenl` is a placeholder for this URL. As long as this isn't replaced with the correct one, it can't restart in the background without manual intervention.