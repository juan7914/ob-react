import React , {useState , useEffect} from 'react';
import { LEVELS } from '../models/levels.enum';
import  Task  from '../models/task.class';
import TaskForm from '../pure/form/taskForm';
import TaskComponents from '../pure/task';





const TaskListComponents = () => {
    
    const defaulTask = new Task ({name :"Example" , description: "df-descripcion", completed : true, level:LEVELS.URGENT})
     const defaulTask2 = new Task ({name :"Example2" , description: "df-descripcion2", completed : false , level:LEVELS.NORMAL })
     const defaulTask3 = new Task ({name :"Example3" , description: "df-descripcion", completed : true ,  level:LEVELS.BLOCKING})
    
    //estado del componente
    const [tasks, setTask] = useState([defaulTask, defaulTask2, defaulTask3]);
    const [loading, setLoading] = useState(true);

    //cilco de vida de componente funcional 

    useEffect(() => {
        console.log("Task  State  has been modified");
        setLoading(false);
        return () => {
            console.log("TaskListComponent is going  to unmount ");
        };
    }, [tasks]);


     function completedTask (task){
         console.log("complete this task", task);
        const index = tasks.indexOf(task)
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed
         //we update the state of the component  and it will update the 
         //iteration of the task in order to show update task
         setTask(tempTask)         
    }

    function deleteTask(task){
        console.log("delete this task", task);
        const index = tasks.indexOf(task)
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTask(tempTask) 
    }

    function addTask(task){
        console.log("create this task", task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTask(tempTasks)
    }

    return (
        <div>
           <div className='col-12'>
                <div className='card'>
                    {/* CARD HEADER (title)*/}
                    <div className='card-header p-3'>
                        <h1>YOU TASK</h1>
                    </div>
                     {/* CARD BODY (contend)*/}
                     {/* data-mdb-perfect-scrollbar='true' */}
                     <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position : 'relative', height:'400px'}}>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope='col'>Tilte</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Level</th>
                                    <th scope='col'>Actions</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((el , index) => {
                                            return(
                                                <TaskComponents 
                                                task = {el}
                                                key = {index}
                                                complete={completedTask}
                                                remove={deleteTask}
                                                >                                                
                                                </TaskComponents>
                                            )                                   
                                        })
                                }
                                {/* TODO: iterar sobre los elementos para que proyecte las tareas  */}
                                {/* <TaskComponents task = {tasks}></TaskComponents> */}
                            </tbody>
                        </table>
                     </div>
                     <TaskForm
                        add = {addTask}
                        >
                     </TaskForm>
                </div>
           </div>
        </div>
    );
};





export default TaskListComponents;
