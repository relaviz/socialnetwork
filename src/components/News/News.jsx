import React, { useState } from 'react';
import s from './News.module.css';
import NewNews from './NewNews/NewNews';


const News = (props) => {
  
  const [count, setCount] = useState(0);

  let newsElement = props.newsPage.news.map(n => <NewNews news={n.newsMessage} key={n.id} id={n.id} />);

  let newNewsElement = React.createRef();

  let newNewsBody = props.newsPage.newNewsBody

  let oneSendNewsClick = () => {
    props.sendNews();
  };

  let onNewNewsChange = (e) => {
    let news = e.target.value;
    props.updateNewNewsBody(news)
  }

  return (
    <div>
      <div className={s.news}>
        <div className={s.newNews}>
        <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
          <div>
            {newsElement}
          </div>
          <div>
            <textarea onChange={onNewNewsChange}
              placeholder='Add new news' value={newNewsBody} ref={newNewsElement} ></textarea>
          </div>
          <div>
            <button onClick={oneSendNewsClick} >Add news</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default News;