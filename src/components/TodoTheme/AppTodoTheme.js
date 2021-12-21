const AppTodoThem = ({param, themeChange = () => {}}) => {
    return(
        <>
            <div className={"bg bg--" + param.theme}>
            </div>
            <div className="toggle-theme toggle-theme__margin">
                <div
                    className="toggle-theme__btn-left"
                    onClick={() => themeChange('dark')}
                ></div>
                <div
                    className="toggle-theme__btn-right"
                    onClick={() => themeChange('light')}
                ></div>
            </div>
        </>
    )
};

export default AppTodoThem;