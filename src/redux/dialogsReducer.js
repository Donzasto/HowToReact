const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Sveta" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Vasiliy" }
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your" },
        { id: 3, message: "Yo" }
    ],
    newMessageBody: ""
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newPostText = "";
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }


}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;