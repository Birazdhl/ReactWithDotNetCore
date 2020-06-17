import React, { useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {  List, Container } from 'semantic-ui-react'
import { IActivity } from '../Models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';



const  App = () => {

    const [activities, setActivities] = useState<IActivity[]>([])
    const [selectedAcivity, setSelectedAcivity] = useState<IActivity | null>(null)
    const [editMode, setEditMode] = useState(false)


    const handleSelectActivity = (id: string) => {
      setSelectedAcivity(activities.filter(a => a.id === id)[0])
    }
    

    useEffect(() => {
      axios.get<IActivity[]>('http://localhost:5000/api/Activities')
              .then((response) => {
               setActivities(response.data);
              })
    },[])

    return (
      <Fragment >
        <NavBar/>         
        <Container style={{marginTop : '7em'}}>
           <ActivityDashboard 
           activities={activities} 
           selectActivity={handleSelectActivity}
           selectedActivity = {selectedAcivity}
           editMode={editMode}
           setEditMode={setEditMode}
           ></ActivityDashboard>
        </Container>
      </Fragment>
    );
   }


export default App;
