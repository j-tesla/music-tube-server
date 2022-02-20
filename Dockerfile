FROM node:16


WORKDIR /front-code

COPY ./frontend /front-code

RUN npm ci && npm run build


FROM node:16

WORKDIR /code

COPY ./backend /code

COPY --from=0 /front-code/build /code/build

RUN npm ci

CMD npm start