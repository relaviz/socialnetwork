import React from 'react';
import s from './News.module.css';
import NewNews from './NewNews/NewNews';


const News = (props) => {
  
  let state = props.newsPage;

  let newsElement = state.news.map(n => <NewNews news={n.newsMessage} id={n.id} />);

  let newNewsElement = React.createRef();

  let newNewsBody = state.newNewsBody

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