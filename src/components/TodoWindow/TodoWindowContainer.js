import React from "react";
import {connect} from "react-redux";
import AppTodoWindow from "../TodoWindow/AppTodoWindow";

const mapStateToProps = (state) => ({
    param:{
		theme: state.themeReducer.theme,
    }
});

const TodoWindowContainer = ({param}) => (
	<AppTodoWindow param={param} />
);

export default connect(
	mapStateToProps
)(TodoWindowContainer);