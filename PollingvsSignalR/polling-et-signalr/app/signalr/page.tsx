"use client";

import React from "react";
import { useEffect } from "react";
import { UselessTask } from "../models/UselessTask";
import TaskView from "../_components/tasks-view";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

export default function Home() {

  const [tasks, setTasks] = React.useState<UselessTask[]>([]);
  const [hubConnection, setHubConnection] = React.useState<HubConnection>();

  useEffect(() => {
      connecttohub();
    }, []);

  function connecttohub() {
    // let testTasks = new Array<UselessTask>(
    //       { id: 1, text: "Test Task 1", completed: false },
    //       { id: 2, text: "Test Task 2", completed: true });
    //     setTasks(testTasks);
    // TODO On doit commencer par créer la connexion vers le Hub
      let newHubConnection = new HubConnectionBuilder().withUrl('http://localhost:5042/MonHub').build();
    // TODO On peut commencer à écouter pour les évènements qui vont déclencher des callbacks
    newHubConnection.on('tasklist',(data) => {
      console.log(data);
      let taskList = new Array<UselessTask>();
      for( let i = 0 ; i < data.length ; i++ ){
        taskList.push(data[i])
      }
      setTasks(taskList);
    })

    newHubConnection.on('taskAdded', (data) => {
      console.log(`La tâche: ${data} a été ajoutée`)
    })
    // TODO On doit ensuite se connecter
    newHubConnection
            .start()
            .then(()=>{
              console.log('connection active');
            })
            .catch(err => console.log('erreur loers du lancement de la connection : ' + err));

            setHubConnection(newHubConnection);
  }

  function onTaskToggle(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur
    let tasksCopy : UselessTask[] = [...tasks];    
    tasksCopy.find(task => task.id === id)!.completed = true;
    setTasks(tasksCopy);
  }

  function handleTaskAdd(taskName : string) {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur
    if(hubConnection){
    hubConnection.invoke('AddTask',taskName)
    .catch(err => console.error("erreur: " + err));
    }else{
      console.log("pas de co")
    }
    
  }

  return (
    <div className="p-4">
        <h1>SignalR!</h1>
        <TaskView 
          tasks={tasks} 
          onTaskAdd={handleTaskAdd}
          onTaskToggle={onTaskToggle}
        />
    </div>
  );
}