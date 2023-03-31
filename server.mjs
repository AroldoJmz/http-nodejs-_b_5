import { createServer } from 'http';

const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors');
//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());    
app.use(cors());


const value = [
  {
      "x": 2003, 
      "y":30,
  },
  {
      "x": 2006, 
      "y":10,
  },
  {
      "x": 2009, 
      "y":46,
  },
  {
      "x": 2012, 
      "y":19,
  },
  {
      "x": 2015, 
      "y":24,
  },
  {
      "x": 2018, 
      "y":31,
  },
  {
      "x": 2023, 
      "y":8,
  }
];

createServer((req, res) => {
  res.write(value);
  res.end();
}).listen(process.env.PORT);
