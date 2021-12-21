import React from "react";
import {connect} from "react-redux";
import AppTodoForm from "./AppTodoForm";
import {addTask} from "../../redux/actions/actions";

const mapStateToProps = (state) => ({
    param:{
        theme: state.themeReducer.theme
    }
});

const mapDispatchToProps = (dispatch) => ({
	addTask(taskText) {
		dispatch(addTask(taskText));
	}
});

const TodoFormContainer = ({param, addTask}) => (
    <AppTodoForm param={param} addTask={addTask} />
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoFormContainer);