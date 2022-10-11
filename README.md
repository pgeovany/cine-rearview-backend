# Cine Rearview backend
Backend for a <a href="https://github.com/pgeovany/cine-rearview-app">cinema app<a/>
<p align="center">
  <a href="http://cine-rearview.vercel.app/">
    <img src="https://cdn-icons-png.flaticon.com/512/745/745752.png" height="300px">
  <a/>
</p>
<h1 align="center">
  Cine Rearview
</h1>
<div align="center">

  <h3>Made with</h3>

  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>
  <img src="http://ForTheBadge.com/images/badges/built-with-love.svg" height="30px"/>
  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>
<br />

# Routes

## Authentication

#### **POST** - Sign up

In order to sign-up, make a post request to: https://cinerearview.herokuapp.com/auth/sign-up
sending a body in the format:

```
{
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}
```

The server will respond with an object in the format:

```
{
  id: string
  username: string,
  email: string,
  createdAt: string
}
```
<br>

#### **POST** - Sign in

In order to sign-in, make a post request to: https://cinerearview.herokuapp.com/auth/sign-in
sending a body in the format:

```
{
  email: string,
  password: string
}
```

The server will respond with an object in the format:

```
{
  username: string,
  token: string
}
```
<br>

## Films

#### **GET** - Search for a film by name

In order to search for a film by name, make a get request to: https://cinerearview.herokuapp.com/films/search
sending the film name via **query string** and an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:

```
[
  {
    originalId: number,
    title: string,
    localTitle: string,
    overview: string,
    poster: string,
    releaseDate: string
  },
[
```
<br>

#### **GET** - Get details of a film by original id (id from themoviedb api)

In order to get details of a film, make a get request to: https://cinerearview.herokuapp.com/films/details/:id
sending the film original id as a **request param** and an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an object in the format:

```
{
  originalId: number,
  title: string,
  localTitle: string,
  overview: string,
  poster: string,
  releaseDate: string,
  runtime: number,
  genres: [
    {
      id: number,
      name: string
    },
  ],
  directors: [
    string,
  ],
  crew: [
    {
      department: string,
      job: string,
      name: string,
      photo: string
     },
  ],
  cast: [
    {
      character: string,
      name: string,
      photo: string
    },
  ],
}
```
<br>

## Userlist

#### **POST** - Add a film to a user's watched films list

In order to add a film to a user's watched films list, make a post request to: https://cinerearview.herokuapp.com/userlist
sending a body in the format:

```
{
  originalId: number,
  title: string ,
  overview: string,
  posterUrl: string,
  releaseDate: string
}
```
And an **Authorization header** in the Bearer TOKEN format.<br><br>

#### **GET** - Get a user's watched films list

In order to get a user's watched films list, make a get request to: https://cinerearview.herokuapp.com/userlist
sending an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:
```
]
  {
    id: string
    originalId: number,
    title: string ,
    overview: string,
    posterUrl: string,
    releaseDate: string
  }
],
```

#### **DELETE** - Remove a film from a user's watched films list

In order to remove a film from a user's list, make a delete request to: https://cinerearview.herokuapp.com/userlist/:id
sending the film id as a **request param** and an **Authorization header** in the Bearer TOKEN format.<br><br>

## Watchlist

#### **POST** - Add a film to a user's watchlist

In order to add a film to a user's watchlist, make a post request to: https://cinerearview.herokuapp.com/watchlist
sending a body in the format:

```
{
  originalId: number,
  title: string ,
  overview: string,
  posterUrl: string,
  releaseDate: string
}
```
And an **Authorization header** in the Bearer TOKEN format.<br><br>

#### **GET** - Get a user's watchlist

In order to get a user's watchlist, make a get request to: https://cinerearview.herokuapp.com/watchlist
sending an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:
```
]
  {
    id: string
    originalId: number,
    title: string ,
    overview: string,
    posterUrl: string,
    releaseDate: string
  }
],
```

#### **DELETE** - Remove a film from a user's watchlist

In order to remove a film from a user's watchlist list, make a delete request to: https://cinerearview.herokuapp.com/watchlist/:id
sending the film id as a **request param** and an **Authorization header** in the Bearer TOKEN format.<br/><br/><br/>

## Acknowledgments
- Logo from: <a href="https://www.flaticon.com/free-icons/film" title="film icons">Film icons created by Freepik - Flaticon</a>
- All movie data comes from: <a href="https://developers.themoviedb.org/"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" width="200px"/></a>
- [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)
