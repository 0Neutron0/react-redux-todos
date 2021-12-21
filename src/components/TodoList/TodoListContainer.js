import React from "react";
import {connect} from "react-redux";
import AppTodoList from "./AppTodoList";

const mapStateToProps = (state) => ({
    param:{
        items: state.taskReducer
    }
});

const mapDispatchToProps = (dispatch) => ({

});

const TodoListConrainer = ({param}) => (
    <AppTodoList param={param} />
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoListConrainer);