select *
from books
where author_fname = 'Raymond'
  and author_lname = 'Carver'
  and released_year =
      (select min(released_year)
       from books
       where author_lname = 'Carver'
         and author_fname = 'Raymond');

SELECT author_fname, author_lname, MIN(released_year) first_published
FROM books
WHERE author_lname = 'Carver'
GROUP BY author_fname, author_lname, book_id;

SELECT author_fname, author_lname, MAX(pages) as longest_book_page FROM books
GROUP BY author_fname, author_lname;

-- show total pages from all the books an author had wrote
SELECT
    author_fname,
    author_lname,
    SUM(pages) as total_wrote
FROM books
GROUP BY author_fname, author_lname
ORDER BY total_wrote DESC;


describe books;
-- average stock quantity of books released in the same year
SELECT released_year, AVG(stock_quantity)
FROM books
GROUP BY released_year
ORDER BY released_year DESC;



