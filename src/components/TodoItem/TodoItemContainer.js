import React from "react";
import {connect} from "react-redux";
import AppTodoItem from "../TodoItem/AppTodoItem";
import {changeStatus, deleteTask} from "../../redux/actions/actions";

const mapStateToProps = (state) => ({
    param:{
		theme: state.themeReducer.theme,
    }
});

const mapDispatchToProps = (dispatch) => ({
	changeStatus(task) {
		dispatch(changeStatus(task));
	},
	deleteTask(idItem) {
		dispatch(deleteTask(idItem));
	}
});

const TodoItemContainer = ({index, param, item, changeStatus, deleteTask}) => (
	<AppTodoItem index={index} param={param} item={item} changeStatus={changeStatus} deleteTask={deleteTask} />
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoItemContainer);