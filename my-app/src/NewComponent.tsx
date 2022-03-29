import React from 'react';

type NewComponentType = {
    topCars: Array<ListOfCars>
}
type ListOfCars = {
    manufacturer: string
    model: string

}
/*let topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]*/
export const NewComponent = (props: NewComponentType) => {
    return (
        <table>
            {props.topCars.map((theCar: ListOfCars, index) => {
                return (
                    <span>
                        <tr>
                        <th>{theCar.manufacturer}</th>
                        </tr>
                         <tr>
                             <td>{theCar.model}</td>
                    </tr>
                    </span>
                )
            })}
        </table>
        /*<table>
            {props.topCars.map((theCar: ListOfCars, index) => {
                return (<tr>
                    <th>{theCar.manufacturer}</th>
                    <td>{theCar.model}</td>
                </tr>)
            })}
        </table>*/
    );
};

/* <ul>
    {props.students.map((objectFromStudentArray: StudentType, index) => {
        return (
            <li key={objectFromStudentArray.id}>
                <span> name: {objectFromStudentArray.name}</span>
                <span> age: {objectFromStudentArray.age}</span>
            </li>
        )
    })}

</ul>*/
/*<ul>
    {props.students.map((el: StudentType) => {
        return (
            <li>{el.id} {el.name} {el.age}</li>
        )
    })}

</ul>*/
//<div>{props.students}</div>