import React from 'react';

type NewComponentType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent = (props: NewComponentType) => {

    return (
        <ul>
            {props.students.map((objectFromStudentArray: StudentType, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span> name: {objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                        </li>
                )
            })}

        </ul>
        /*<ul>
            {props.students.map((el: StudentType) => {
                return (
                    <li>{el.id} {el.name} {el.age}</li>
                )
            })}

        </ul>*/
        //<div>{props.students}</div>
    );
};