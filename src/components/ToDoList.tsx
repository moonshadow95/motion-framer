import React, {useState} from 'react'
import CreateToDo from "./CreateToDo";
import {useRecoilState, useRecoilValue} from "recoil";
import {Categories, categoryState, toDoSelector, toDoState} from "../atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
    // selector 로 변형된 배열을 받는다.
    const toDos = useRecoilValue(toDoSelector)
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any)
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select onInput={onInput} value={category}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo/>
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
        </div>
    )
};

export default ToDoList;