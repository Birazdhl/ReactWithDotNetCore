import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/Models/activity'
import { ActivityList } from './ActivityList'
import { ActivityDetail } from '../Detail/ActivityDetail'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
    activities: IActivity[],
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode : boolean,
    setEditMode: (editMode: boolean) => void
}

export const ActivityDashboard: React.FC<IProps> = 
({activities, 
    selectActivity, 
    selectedActivity,
    editMode,
    setEditMode 
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                    <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column> 
            <Grid.Column width={6}>
                { selectedActivity && !editMode && <ActivityDetail activity={selectedActivity} setEditMode={setEditMode}/>}
                {editMode && <ActivityForm />} 
            </Grid.Column>
        </Grid>
    )
}
