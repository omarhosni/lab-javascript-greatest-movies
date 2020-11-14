// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  return movies.map(movie => movie.director )
  }

// Iteration 2: Steven Spielberg. The best? - 
// How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies){
  return movies.filter(movie => movie.genre.includes('Drama')
   && movie.director === "Steven Spielberg").length;  
};

// Iteration 3: All rates average - Get the average of 
// all rates with 2 decimals

function ratesAverage(movies) {
  if ( movies.length === 0) {
      return 0
  }
  let total = movies.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.rate || 0)
  },0)
  return Math.round((total / movies.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let total = 0;  
  total = movies.filter(drama => drama.genre.includes("Drama"))
  return ratesAverage(total)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let Array = movies.sort((a, b) => {
      return a.year > b.year ? 1 : -1;
  })
  return [...Array]
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
let title = []
for (const movie of movies) {
  title.push(movie.title);
} title.sort()
return title.slice(0,20)
}