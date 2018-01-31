# bookshelf

> The p2p Goodreads!

## Brief
Fritter/Beaker/everything-P2P dev Tara Vancil started a thread [here](dat://9900f9aad4d6e79e0beb1c46333852b99829e4dfcdfa9b690eeeab3c367c1b9a/thread/dat://6348fac3c70e916885ead7dce6927f01e02c0efd1a9273849891c23b7e7bac4d/posts/0jcqey0ot.json) about what books people were using, and Joe Hand responded [here](dat://9900f9aad4d6e79e0beb1c46333852b99829e4dfcdfa9b690eeeab3c367c1b9a/thread/dat://b8411795cca3b718009ad2a175da6dd3599efadd398186fcb2ab111b092e8a52/posts/0jcrv3gkb.json) with an idea to create a P2P Goodreads, so that's exactly what this is!

Bookshelf is an app for P2P web users to save, review, and recommend books. For now, it won't be a full-on social network with comments, replies, etc. - take a look at [Fritter](dat://9900f9aad4d6e79e0beb1c46333852b99829e4dfcdfa9b690eeeab3c367c1b9a/) for that - but it'll fill a small void in the existing P2P app library.

## API

### `App`
The main entry point for the app. Globally accessible with `app`.

* `user` - [`User`](#user) object referencing the current user.

### `Book`
A single book. Property names from the [schema.org Book schema](https://schema.org/Book).

* `title` - String, display title
* `author` - String, display author
* `isbn` - Number, ISBN
* `description` - String, display summary
* `series` - String, name of series
* `links` - Array, list of [`Link`](#link)s for this book
* `rating` - Number, stars (out of 5) given to this book by the User
* `review` - String, User-created review

### `Link`
A link to an outside resource.

* `text` - String, display text
* `url` - String, URL

### `Shelf`
Contains a list of books.

* `name` - String, display name
* `books` - Array, list of [`Book`](#book) objects this Shelf contains,
* `owner` - [Link](#link) to User who owns this Shelf

### `User`
Contains all information for a given user.

* `name` - String, display name
* `url` - String, `dat://` URL for this profile
* `shelves` - Array, list of [`Shelf`](#shelf) objects this User owns
* `follows` - Array, list of [`Link`](#link)s to Bookshelf profiles this User follows

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
