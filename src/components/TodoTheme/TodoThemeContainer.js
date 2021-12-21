import React from "react";
import {connect} from "react-redux";
import AppTodoTheme from "../TodoTheme/AppTodoTheme";
import {themeChange} from "../../redux/actions/actions";

const mapStateToProps = (state) => ({
    param:{
		theme: state.themeReducer.theme,
    }
});

const mapDispatchToProps = (dispatch) => ({
	themeChange(themeName) {
		dispatch(themeChange(themeName));
	}
});

const TodoThemContainer = ({param, themeChange}) => (
	<AppTodoTheme param={param} themeChange={themeChange} />
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoThemContainer);