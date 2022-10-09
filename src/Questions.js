
import React, { useState} from 'react';
import data from './dataquestion';
import SingleQuestion from './Question';


export default function Questions() {
    const [ questions, setQuestions]= useState(data);

  return (
    <main>
    <div className='review'>
         <h3> Quesitons and asnwers about tours </h3>
         <section className='info'>
            { questions.map((question)=>{
                return <SingleQuestion key = { question.id} {...question}></SingleQuestion>
            })}
         </section>
    </div>
    </main>
  )
}
