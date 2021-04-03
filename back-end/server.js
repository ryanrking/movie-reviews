const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the database
mongoose.connect('mongodb://localhost:27017/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Note: CHANGE THIS before publishing
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const movieSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  director: String,
  tomatometer: Number,
  metacritic: Number,
  review: String,
  poster: String,
  ranking: { type: Number, default:0 },
  numRankings: { type: Number, default:0 }
});

const Movie = mongoose.model('Movie', movieSchema);

const commentSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.ObjectId,
    ref: 'Movie'
  },
  text: String,
  author: String,
});

const Comment = mongoose.model('Comment', commentSchema);

// Start API calls

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Add a movie to database
app.post('/api/movies', async (req, res) => {
  const movie = new Movie({
    name: req.body.name,
    rating: req.body.rating,
    director: req.body.director,
    tomatometer: req.body.tomatometer,
    metacritic: req.body.metacritic,
    review: req.body.review,
    poster: req.body.poster,
  });
  try {
    await movie.save();
    res.send(movie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get movie list
app.get('/api/movies', async (req, res) => {
  try {
    let movies = await Movie.find();
    res.send(movies);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get single movie
app.get('/api/movies/:movieID', async (req, res) => {
  try {
    let movie = await Movie.findOne({_id: req.params.movieID});
    if (!movie) {
      res.send(404);
      return;
    }
    res.send(movie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Update movie
app.put('/api/movies/:movieID', async (req, res) => {
  try {
    let movie = await Movie.findOne({_id:req.params.movieID});
    if (!movie) {
      res.send(404);
      return;
    }

    movie.name = req.body.name;
    movie.rating = req.body.rating;
    movie.director = req.body.director;
    movie.tomatometer = req.body.tomatometer;
    movie.metacritic = req.body.metacritic;
    movie.review = req.body.review;
    movie.poster = req.body.poster;
    movie.ranking = req.body.ranking;
    movie.numRankings = req.body.numRankings;

    await movie.save();
    res.send(movie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Post a comment to a movie
app.post('/api/movies/:movieID/comments', async (req, res) => {
  try {
      let movie = await Movie.findOne({_id: req.params.movieID});
      if (!movie) {
          res.send(404);
          return;
      }

      let comment = new Comment({
          movie: movie,
          text: req.body.text,
          author: req.body.author,
      });
      await comment.save();
      res.send(comment);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

// Get comments for a movie
app.get('/api/movies/:movieID/comments', async (req, res) => {
  try {
      let movie = await Movie.findOne({_id: req.params.movieID});
      if (!movie) {
          res.send(404);
          return;
      }
      let comments = await Comment.find({movie:movie});
      res.send(comments);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

// Update a comment
app.put('/api/movies/:movieID/comments/:commentID', async (req, res) => {
  try {
      let comment = await Comment.findOne({_id:req.params.commentID, movie: req.params.movieID});
      if (!comment) {
          res.send(404);
          return;
      }
      comment.text = req.body.text;
      comment.author = req.body.author;
      await comment.save();
      res.send(comment);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

// Delete a comment
app.delete('/api/movies/:movieID/comments/:commentID', async (req, res) => {
  try {
      let comment = await Comment.findOne({_id:req.params.commentID, movie: req.params.movieID});
      if (!comment) {
          res.send(404);
          return;
      }
      await comment.delete();
      res.sendStatus(200);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));