"use client";

import React, { useEffect } from "react";
import axios from "axios";
import TaskView from "../_components/tasks-view";
import { UselessTask } from "../models/UselessTask";

export default function Home() {

  const [tasks, setTasks] = React.useState<UselessTask[]>([]);
  
  const [server, setServer] = React.useState("http://localhost:5042/")

  useEffect(() => {
    // initial load + polling every second
    updateTasks();
    const id = setInterval(() => {
      updateTasks();
    }, 5000);
    return () => clearInterval(id);
  }, []);

  async function handleTaskAdd(taskName: string) {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur (Contrôleur d'API)check✅✅
    let result = await axios.post(`${server}api/UselessTasks/Add?taskText=${taskName}`);
    console.log(result);
  }

  async function onTaskToggle(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur (Contrôleur d'API)
    let result = await axios.get(`${server}api/UselessTasks/Complete/${id}`);
    console.log(result);
    // let tasksCopy : UselessTask[] = [...tasks];    
    // tasksCopy.find(task => task.id === id)!.completed = true;
    // setTasks(tasksCopy);

  }

  async function updateTasks() {
    let testTasks = new Array<UselessTask>();
    // TODO: Faire une première implémentation simple avec un appel au serveur pour obtenir la liste des tâches
    let result = await axios.get(`${server}api/UselessTasks/GetAll`);
    //console.log(result.data[0]);
    for (let i= 0; i < result.data.length; i++) {
      let task = result.data[i];
      //console.log(task);
      testTasks.push({
        id: task.id,
        text: task.text,
        completed: task.completed
      });
    }
    setTasks(testTasks);
    // TODO: UNE FOIS QUE VOUS AVEZ TESTER AVEC DEUX CLIENTS: Utiliser le polling pour mettre la liste de tasks à jour chaque seconde
  }

  return (
    <div className="p-4">
        <h1>Polling!</h1>
        <TaskView 
          tasks={tasks} 
          onTaskAdd={handleTaskAdd}
          onTaskToggle={onTaskToggle}
        />
    </div>

  );
}