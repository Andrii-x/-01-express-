# nodejs-hw

Express API for notes.

## Run locally

Create a `.env` file with the server port:

```env
PORT=3000
```

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

The production command is `npm start`.

## Endpoints

- `GET /notes` returns `{ "message": "Retrieved all notes" }`.
- `GET /notes/:noteId` returns a message containing the requested ID.
- `GET /test-error` simulates a server error.
- Other routes return `404` with `{ "message": "Route not found" }`.

Errors return a JSON message with status `500`. HTTP requests are logged with `pino-http`.