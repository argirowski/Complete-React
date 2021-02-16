import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  //this updates term, useEffect sets a timer setDebouncedTerm, cancels previous timer, updates term and sets a new setDebouncedTerm timer
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  // useEffect(() => {
  //three ways to make a request inside useEffect instead of async await
  // //one => declare a helper function THIS IS THE BEST !!!

  // if (term && !results.length) {
  //   searchWiki();
  // } else {
  //if there is input in the search bar, activate search
  //wrap the search in a setTimeout function with 500ms timeout
  //   const timeOutId = setTimeout(() => {
  //     if (term) {
  //       searchWiki();
  //     }
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeOutId);
  //   };
  // }

  //two => declare a helper function and immediately invoke it
  // (async () => {
  //   await axios.get('ahahahah');
  // })();
  //three => use promesys
  // axios.get('ahahahah').then((res) => {
  //   console.log(res.data);
  // });
  // }, [term, results.length]);
  // }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
