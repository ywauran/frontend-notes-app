import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import { LocaleConsumer } from '../contexts/LocaleContext';
import { ThemeConsumer } from '../contexts/ThemeContext';

function Homepage() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState(null);
  const [body, setBody] =useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || ''
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    })
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword)
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  }, [notes, keyword]);

  useEffect(() => {
    async function setActiveNotes() {
      const { error, data } = await getActiveNotes();

      if(!error) {
        setNotes(data)
      }

      setTitle(title);
      setBody(body);
    }
    setActiveNotes();

    return () => {
      setTitle(null);
      setBody(null);
    };
  }, [title, body]);

  return (
    <ThemeConsumer>
      {
        ({ theme }) => {
          return (
            <LocaleConsumer>
              {
                ({ locale }) => {
                  return (
                    <div>
                      <section>
                        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'}  text-center text-xl font-semibold`}>{ locale == 'id' ? 'Daftar Catatan' : 'List Notes' }</h2>
                        <SearchBar
                          keyword={keyword}
                          keywordChange={onKeywordChangeHandler}
                        />
                        <NoteList notes={notes} filter={filteredNotes}/>
                      </section>
                    </div>
                  )
                }
              }
            </LocaleConsumer>
          )
        }
      }
    </ThemeConsumer>
  )
}

export default Homepage;
