import React from 'react';
import s from './News.module.css';
import { sendNewsCreator, updateNewNewsBodyCreator } from '../../redux/news-reducer';
import NewNews from './NewNews/NewNews';


const News = (props) => {
  let newsElement = props.state.news.map(n => <NewNews news={n.newsMessage} id={n.id} />);

  let newNewsElement = React.createRef();

  let newNewsBody = props.state.newNewsBody

  let oneSendNewsClick = () => {
    props.store.dispatch(sendNewsCreator ())
  }
  let onNewNewsChange = (e) => {
    let news = e.target.value;
    props.store.dispatch(updateNewNewsBodyCreator(news))
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