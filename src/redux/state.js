let store = {
    _state: {

        profilePage: {
            posts: [{id: 1, text: 'How are you?', likesCount: 240}, {id: 2, text: 'Im fine', likesCount: 125}],
            newPostText: 'jlml'
        },

        dialogsPage: {
            dialogs: [{id: 1, name: 'Alina'}, {id: 2, name: 'Yana'}, {id: 3, name: 'Dasha'}],

            messages: [{id: 1, text: 'I Love Alina'}, {id: 2, text: 'Yana not love Vadim'}, {
                id: 3, text: 'Dasha love Fedora'
            }],
            newMessage :' hello'
        }, sidebar: {}
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 3, text: this._state.profilePage.newPostText, likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ' '
            this._callSubscriber(this._state)
        }else if( action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }else if (action.type === 'ADD-MESSAGE'){
            let newMess = {
                id: 4, text: this._state.dialogsPage.newMessage
            };
            this._state.dialogsPage.messages.push(newMess)
            this._state.dialogsPage.newMessage = ' '
            this._callSubscriber(this._state)
        }else if (action.type ==='UNMT'){
            this._state.dialogsPage.newMessage =action.newText
            this._callSubscriber(this._state)
        }
    }

}

export default store;