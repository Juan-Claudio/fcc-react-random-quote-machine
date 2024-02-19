import { createStore } from 'redux';

const allQuotes = [
    {"text": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"text": "In the middle of difficulty lies opportunity.", "author": "Albert Einstein"},
    {"text": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
    {"text": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
    {"text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"text": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"text": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
    {"text": "The best way to predict the future is to invent it.", "author": "Alan Kay"},
    {"text": "The only thing necessary for the triumph of evil is for good men to do nothing.", "author": "Edmund Burke"},
    {"text": "Life is what happens when you're busy making other plans.", "author": "John Lennon"},
    {"text": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", "author": "Marie Curie"},
    {"text": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson"},
    {"text": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela"},
    {"text": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
    {"text": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky"},
    {"text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"text": "We must accept finite disappointment, but never lose infinite hope.", "author": "Martin Luther King Jr."},
    {"text": "It is never too late to be what you might have been.", "author": "George Eliot"},
    {"text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer"},
    {"text": "You must be the change you wish to see in the world.", "author": "Mahatma Gandhi"}
]

const GET_QUOTE = 'GET_QUOTE'

//action creator
const getQuote = () => { return {type:GET_QUOTE} }

const defaultState = () =>{
    return 
}

const quotesReducer = (state = allQuotes[Math.floor(Math.random()*20)], action) => {
    switch(action.type)
    {
        case GET_QUOTE:
            return Object.assign({}, allQuotes[Math.floor(Math.random()*20)])
        default:
            return state
    }
}

const store = createStore(quotesReducer)

/*
    React component must to activate: store.dispatch(getQuote())
*/

export { store, getQuote }