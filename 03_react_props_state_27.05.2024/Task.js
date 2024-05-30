const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ title, del }) => {
    // const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false); // [isEdit, setIsEdit] Array(2)
    // React.useState() - хук (инструмент или метод), который принимает дефолтное значение локального состояния 
    // возвращает кортеж (массив с заранее известными элементами и его длиной(2))
    // 1. локальное состояние (переменная) и 2. метод, с помощью которого будет изменяться значение локального состояния

    // isEdit = true;      ОШИБКА! Значение локального состояния изменилось, но React не следит за подобными изменениями
    // setIsEdit(true)     Корректный способ изменения значения локального состояния

    const [updatedTask, setUpdatedTask] = React.useState(title);

    // 1. Получение абстрактной ссылки, которую впоследствии можно повесить на любой из элементов
    const textId = React.useRef();

    const handleClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    }

    if (isEdit) {
        return (
            <>
                {/* 2. Соединяем абстрактную ссылку с конкретным элементом, на который данная ссылка будет вести */}
                <textarea ref={textId} defaultValue={updatedTask}></textarea>
                {/* () => setIsEdit(false)     setIsEdit(false)        setIsEdit*/}
                <button onClick={handleClickSave}>Save</button>
            </>
        )
    } else {
        return (
            <>
                <p>{updatedTask}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button onClick={del}>Delete</button>
            </>
        )
    }
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState(['Task 1', 'Task 2', 'Task 3']);
    const [newTask, setNewTask] = React.useState('');

    const deleteTask = (i) => {
        // CRUD - Create Read Update Delete
        // 1. Глубокая копия массива
        const tasksCopy = [...tasks];

        // 2. Поверхностная копия массива
        // const tasksCopy2 = tasks;
        // Удаление i-ого элемента массива в копии
        tasksCopy.splice(i, 1);
        // Обновлённую копию передали в качестве нового значения локального состояния
        setTasks(tasksCopy);
    }
    
    return (
        <>
            <h1>Todo List App</h1>
            <div>
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <button>Add Task</button>
            </div>
            { tasks.map((task, i) => (
                <Task
                    // Свойство key является обязательным (служебный инструмент для библиотеки React)
                    // У нас нет доступа до значения, переданного с помощью props key
                    key={Math.random()}
                    // index={i}
                    title={task}
                    del={() => deleteTask(i)}
                />
            )) }
        </>
    )
}

root.render(
    <TaskList />
)