const { addPostActionCreator, default: profileReducer, deletePost } = require("./profile-reducer");

let state = {
    posts: [
        { id: 1, message: 'It`s my firts post', likesCount: 12 },
        { id: 2, message: 'Hello world', likesCount: 20 },
        { id: 3, message: 'How are you?', likesCount: 11 },
        { id: 4, message: 'How are you? Hhoho', likesCount: 0 }
    ]
};

test('length of post shold be incremeted', () => {
    //1. test data
    let action = addPostActionCreator("It-kamasutra.com");
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(5);
  });

test('after deleting length of message shold be decrement ', () => {
    //1. test data
    let action = deletePost(1);
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(3);
  });

test('after deleting length of message sholdn`t be decrement if id is incorect', () => {
    //1. test data
    let action = deletePost(1000);
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(4);
  });

