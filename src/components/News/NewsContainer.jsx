import React from 'react';
import { sendNewsCreator, updateNewNewsBodyCreator } from '../../redux/news-reducer';
import News from './News';
import StoreContext from '../../StoreContex';

const NewsContainer = () => {

  return <StoreContext.Consumer> 
    {(store) => {
      let state = store.getState().newsPage;

      let oneSendNewsClick = () => {
        store.dispatch(sendNewsCreator())
      };

      let onNewNewsChange = (news) => {
        store.dispatch(updateNewNewsBodyCreator(news))
      };
      return <News updateNewNewsBody={onNewNewsChange}
        sendNews={oneSendNewsClick} newsPage={state} />
    }
  }
  </StoreContext.Consumer>
}

export default NewsContainer;