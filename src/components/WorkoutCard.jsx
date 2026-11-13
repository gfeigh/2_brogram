/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Modal from './Modal.jsx'
import { exerciseDescriptions } from '../utils/index.js'

export default function WorkoutCard(props) {

    const { trainingPlan, workoutIndex, type, icon, dayNum, savedWeights, handleSave, handleComplete } = props

    const {warmup, workout} = trainingPlan || {}
    const [showExerciseDescription, setShowExerciseDescription] = useState(null)
    const [weights, setWeights] = useState(savedWeights || {})

    function handleAddWeight(title, weight) {
        const newObj = {
            ...weights,
            [title]: weight
        }
        setWeights(newObj)
    }

    return (
        <div className="workout-container">
        {showExerciseDescription && (<Modal showExerciseDescription={showExerciseDescription} 
            handleCloseModal={( ) => { 
                setShowExerciseDescription(null)
            }}/>)}
            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} Workout</b></h2>
                </div>
            </div>

        <div className="workout-grid">
            <div className="exercise-name">
                <h4>Warmup</h4>
            </div>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 className="weight-input">Max Weight</h6>
            {warmup.map((warmupExercise, warmupIndex) => {
                const equipment = warmupExercise.equipment
                const equipmentIcon = equipment == 'Dumbbells' ? <i class="fa-solid fa-dumbbell"/> : equipment == 'Bands' ? <i class="fa-solid fa-grip-lines-vertical"/>: <i class="fa-solid fa-person"/>
                return (
                    <React.Fragment key={warmupIndex}>
                        <div className='exercise-name'>
                            <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                            <div className='equipment-icon'>
                                {equipmentIcon}
                            </div>
                            <button onClick={() => {
                                setShowExerciseDescription({
                                    name: warmupExercise.name,
                                    description: exerciseDescriptions[warmupExercise.name]
                                })
                            }} className='help-icon'>
                                <i className='fa-regular fa-circle-question'></i>
                            </button>
                        </div>
                        <p className='exercise-info'>{warmupExercise.sets}</p>
                        <p className='exercise-info'>{warmupExercise.reps}</p>
                        <input className='weight-input' placeholder={equipment == "Dumbbells" ? '10' : 'N/A'} disabled={equipment == "Dumbbells" ? false : true} />
                    </React.Fragment>
                )
            })}
            </div>

            <div className="workout-grid">
            <div className="exercise-name">
                <h4>Workout</h4>
            </div>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 className="weight-input">Max Weight</h6>
            {workout.map((workoutExercise, wIndex) => {
                const equipment = workoutExercise.equipment
                const equipmentIcon = equipment == 'Dumbbells' ? <i class="fa-solid fa-dumbbell"/> : equipment == 'Bands' ? <i class="fa-solid fa-grip-lines-vertical"/>: <i class="fa-solid fa-person"/>
                return (
                    <React.Fragment key={wIndex}>
                        <div className='exercise-name'>
                            <p>{wIndex + 1}. {workoutExercise.name}</p>
                            <div className='equipment-icon'>
                                {equipmentIcon}
                            </div>
                            <button  onClick={() => {
                                setShowExerciseDescription({
                                    name: workoutExercise.name,
                                    description: exerciseDescriptions[workoutExercise.name]
                                })
                            }}className='help-icon'>
                                <i className='fa-regular fa-circle-question'></i>
                            </button>
                        </div>
                        <p className='exercise-info'>{workoutExercise.sets}</p>
                        <p className='exercise-info'>{workoutExercise.reps}</p>
                        <input value={weights[workoutExercise.name] || ''} onChange={(event) => {
                            handleAddWeight(workoutExercise.name, event.target.value)
                        }}className='weight-input' placeholder={equipment == "Dumbbells" ? '10' : 'N/A'} disabled={equipment == "Dumbbells" ? false : true} />
                    </React.Fragment>
                )
            })}
            </div>

            <div className='workout-buttons'>
                <button onClick={()=>{
                    handleSave(workoutIndex, {weights})
                }
                }>Save & Exit</button>
                <button onClick={()=>{
                    handleComplete(workoutIndex, {weights})
                }} disabled={Object.keys(weights).length != workout.length}>Complete</button>
            </div>
        </div>
    )
}