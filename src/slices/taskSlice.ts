import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { taskService, Task, IAddTask, IDeleteTask, DeletedTask, IUpdateTask } from '../services/task.service';

interface EnchencedTask extends Task {
    error: string | undefined;
    isLoading: boolean;
}

interface TasksState {
    tasks: Array<EnchencedTask>;
    isLoading: boolean;
    error: any;
}

const echnaceTasks = (tasks: Array<Task>) => {
    const enchancedTasks
        = tasks.map(task => {
            const enchancedTask: EnchencedTask = {
                ...task,
                isLoading: false,
                error: undefined
            };
            return enchancedTask;
        });

    return enchancedTasks;
};

const handleTaskArrayResponse = (response: Task[] | undefined) =>{
    if (!response?.length) {
        return new Array(0);
    }
    const echnacedTasks = echnaceTasks(response);
    return echnacedTasks;
}

export const getTasks = createAsyncThunk<Array<EnchencedTask>, string, { rejectValue: string }>
    ('tasks/get', async (userName) => {
        try {
            const response = await taskService.getTasks(userName);
            const enchancedTasks = handleTaskArrayResponse(response);
            return enchancedTasks;
        }
        catch (err) {
            return err;
        }
    });

export const addTask = createAsyncThunk<Array<EnchencedTask>, IAddTask, { rejectValue: string }>
    ('tasks/add', async (taskToAdd) => {
        try {
            const response = await taskService.addTask(taskToAdd);
            const enchancedTasks = handleTaskArrayResponse(response);
            return enchancedTasks;
        }
        catch (err) {
            throw err;
        }
    });
export const deleteTask = createAsyncThunk<DeletedTask, IDeleteTask, { rejectValue: string }>
    ('tasks/delete', async (taskToDelete) => {
        try {
            const response = await taskService.deleteTask(taskToDelete);
            if (!response?.id) {
                throw Error();
            }
            return response;
        }
        catch (err) {
            throw err;
        }
    });

    export const updateTask = createAsyncThunk<Array<EnchencedTask>, IUpdateTask, { rejectValue: string }>
    ('tasks/update', async (taskToAdd) => {
        try {
            const response = await taskService.updateTask(taskToAdd);
            const enchancedTasks = handleTaskArrayResponse(response);
            return enchancedTasks;
        }
        catch (err) {
            throw err;
        }
    });

const initialState: TasksState = {
    tasks: [],
    isLoading: false,
    error: undefined
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.pending, (state, { payload }) => {
            state.isLoading = true;
        });
        builder.addCase(getTasks.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.tasks = payload;
        });
        builder.addCase(getTasks.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });


        builder.addCase(addTask.pending, (state, { payload }) => {
            state.isLoading = true;
        });
        builder.addCase(addTask.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.tasks.push(...payload);
        });
        builder.addCase(addTask.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });


        builder.addCase(deleteTask.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteTask.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.tasks.filter( taskItem => taskItem.id !== payload.id);
        });
        builder.addCase(deleteTask.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });

        builder.addCase(updateTask.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateTask.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.tasks.map((taskItem, index) => {
                if(payload[index] === undefined)
                {
                    return taskItem
                }
                taskItem = payload[index];
                return taskItem;
            })
        });
        builder.addCase(updateTask.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });

    }
});

export default taskSlice.reducer;