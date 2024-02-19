import QuoteBox from "./QuoteBox"
import { connect } from "react-redux"
import { getQuote } from "../store/index.js"

const mapStateToProps = (state) => { return { currentQuote: state } }

const mapDispatchToProps = (dispatch) => {
    return { getNewQuote: () => { dispatch(getQuote()) } }
}

const Container = connect( mapStateToProps, mapDispatchToProps)(QuoteBox)

export default Container