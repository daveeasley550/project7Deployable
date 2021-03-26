// import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";

// export default class Edit extends React.Component {
//     constructor(props) {
//         super()
//         this.state = {
//             // yourState: []
//         }
//     }
//     displayAllPeople =(people)=>{
//         const peopleCards = people.map(person=><a className='person-card' href="#personToEdit" onClick={() => this.getPersonToEdit(person.id)}> {person.name}</a>)
//         return (peopleCards)//can i change the href to make it display all the info and make new browser pages for the delete and edit?
//     }
//     getPersonToEdit = (id) => {
//         const allPeople = [...this.state.people]
//         const foundPerson = allPeople.filter(person => person.id === id)[0]
//         //add the db update
//         this.setState({ personToEdit: foundPerson })
//     }
//     getPersonToDelete = (id) => {
//         const allPeople = [...this.state.people]
//         const peopleAfterDelete = allPeople.filter(person => person.id !== id);
//         //add the db delete
//         this.setState({people: peopleAfterDelete, personToEdit: {}})
//     }
//     render() {
//         return (
//             <div>
//               {peopleCards} 
//             </div>
//         )
//     }
// }