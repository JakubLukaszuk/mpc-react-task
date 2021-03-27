import axios from '../api/agent';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Task {
    id: string,
    task: string,
    is_completed: number | boolean,
    candidate: string
}

export interface IAddTask {
    username: string,
    task: string
    isCompleted: 0 | 1
}

export interface IUpdateTask extends IAddTask {
    id: string;
}

export interface IDeleteTask {
    username: string,
    id: string
};

export interface DeletedTask {
    id: string
}

const postRequestOptions: AxiosRequestConfig = {
    headers: { 'Content-Type': 'multipart/form-data' },
};


const getTasks = async (username: string) => {
    try {
        const response = await axios.get<AxiosResponse<Array<Task>>>(username);
        return response.data.data
    }
    catch (error) {
        Promise.reject(error);
    }
};


const addTask = async (taskToAdd: IAddTask) => {
    const { task, username, isCompleted } = taskToAdd;

    const formData = new FormData();
    formData.append('task', task);
    formData.append('is_completed', isCompleted.toString());

    try {
        const { data } = await axios.post<AxiosResponse<Array<Task>>>(username, formData, postRequestOptions);
        return data.data
    }
    catch (error) {
        Promise.reject(error);
    }

};

const updateTask = async (taskToUpdate: IUpdateTask) => {
    const { task, username, isCompleted, id } = taskToUpdate;

    const formData = new FormData();
    formData.append('task', task);
    formData.append('is_completed', '1');
    formData.append("is_completed", isCompleted.toString())

    try {
        const { data } = await axios.post<AxiosResponse<Array<Task>>>(`${username}/${id}`, formData, postRequestOptions);
        return data.data
    }
    catch (error) {
        Promise.reject(error);
    }
}

const deleteTask = async (taskToDelete: IDeleteTask) => {
    const { id, username } = taskToDelete;
    try {
        const response = await axios.delete<AxiosResponse<DeletedTask>>(`${username}/${id}`);
        return response.data.data
    }
    catch (error) {
        Promise.reject(error);
    }

}

export const taskService = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
};
