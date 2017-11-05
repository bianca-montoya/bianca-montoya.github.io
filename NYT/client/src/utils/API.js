import axios from "axios";

export default {
    // This will run our query.
    runQuery: function(term, start, end) {
      
          // Adjust to get search terms in proper format
          var formattedTerm = term.trim();
          var formattedStart = start.trim() + "0101";
          var formattedEnd = end.trim() + "1231";
      
          // Run a query using Axios. Then return the results as an object with an array.
          // See the Axios documentation for details on how we structured this with the params.
          return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
              "api-key": "5d774cb7c767436eada25092461211bb",
              "q": formattedTerm,
              "begin_date": formattedStart,
              "end_date": formattedEnd
            }
          })
          .then(function(results) {
            return results.data.response;
          });
        },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
