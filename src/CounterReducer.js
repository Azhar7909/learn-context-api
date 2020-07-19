function CounterReducer(state, action) {
    const INCREMENT = 'INCREMENT';
    switch (action) {
        case INCREMENT:
            return state + 1
        default:
            return state
    }
}

export default CounterReducer