import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      currentSelected:{},
      personToEdit: {},
      showPeople: "",
      newPerson:{}
        
    };
  }
  componentDidMount() {
    this.pullPeople();
  }
  getCurrentSelected=(selectedPersonData)=>{
    this.setState({currentSelected:selectedPersonData})
  }
  pullPeople = (people) => {
    const peopleUrl = "https://polar-lake-62924.herokuapp.com/peoples/";
    fetch(peopleUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          people: data,
        });
        console.log(this.state.people);
      });
  };
  handleMore = (_id) => {
    this.setState({
      showPeople: _id,
    });
  };
  handleEditChange=(e)=>{
    this.setState({personToEdit:{...this.state.personToEdit,[e.target.name]:e.target.value }})
      }
  displayAllPeople = (people) => {
    const peopleCards = people.map((person) => (
     <div>
        <a className="person-card" href="#handleMore"
        onClick={() => {this.handleMore(person._id);this.getCurrentSelected(person.name)}}>{person.name}

{/* <a href="#" onClick={() => { func1(); func2();}}>Test Link</a> */}
        
        </a>
      {this.state.showPeople==person._id?
      <div>
          <button className="button" onClick={() => {this.deletePerson(person._id)}}>Delete</button>
          <button className="button" onClick={() => {this.getEditPerson(person)}}>Edit</button>
           
           <h5>Birth Year: {person.birth_year}</h5>
           <h5>Gender: {person.gender}</h5>    
           <h5>Height: {person.height}cm</h5>
           <h5>Mass: {person.mass}kg</h5>
           <h5>Hair Color: {person.hair_color}</h5>
           <h5>Eye Color: {person.eye_color}</h5>
           <h5>Skin Color: {person.skin_color}</h5>
      </div>:
       null}
      </div>
    ));
    return peopleCards; 
  };
  createNewPerson = (e) => {
    e.preventDefault()
    const newPerson = this.state.newPerson
    const requestOptions = {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPerson)
    }
    fetch("https://polar-lake-62924.herokuapp.com/peoples/", requestOptions)
    .then(resp=>resp.json())
    .then(returnedPerson=>{
      console.log(returnedPerson)
      this.setState({people: [...this.state.people, returnedPerson]})
    })
  }
  handleFormChange =(e)=>{
    // console.log(e.target.name, e.target.value)
    this.setState({newPerson:{...this.state.newPerson, [e.target.name]:e.target.value}})
  }
  deletePerson=(id)=>{
    console.log("delete me:",id)
    fetch("https://polar-lake-62924.herokuapp.com/peoples/"+id,{method: "DELETE"})
    .then(resp=>resp.json())
    .then(deleteResp=>{
    const updatedPeople = this.state.people.filter(person=>person._id!=id)
    this.setState({currentSelected:{}, bookmarks: updatedPeople})
    })
      }
      //   getPersonToDelete = (id) => {
        //     const allPeople = [...this.state.people];
        //     const peopleAfterDelete = allPeople.filter((person) => person.id !== id);
        //     console.log(peopleAfterDelete)
            
           
        //     this.setState({ people: peopleAfterDelete, personToEdit: {} });
        //     console.log("deleting")
        //   };
      updatePerson = (e) =>{
        e.preventDefault()
        const{name,birth_year,eye_color,gender,hair_color,height,mass,skin_color,_id} =this.state.personToEdit
        const updatedPerson = {name,birth_year,eye_color,gender,hair_color,height,mass,skin_color}
        console.log(updatedPerson,_id)
        const requestOptions = {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedPerson)
        }
        fetch("https://polar-lake-62924.herokuapp.com/peoples/"+_id, requestOptions)
          .then(resp => resp.json())
          .then(returnedUpdatedPerson => {
            console.log(returnedUpdatedPerson)
            const allUpdatedPeople = this.state.people.map(person=>person._id ===_id ? returnedUpdatedPerson : person)
            this.setState({people: allUpdatedPeople, currentSelected:{}, personToEdit:{}})
          })
      }
      getEditPerson = (personToEdit) => {
        this.setState({personToEdit})
      }
//   getPersonToEdit = (thePerson) => {
//     console.log("edit",)
//     this.setState({ personToEdit: thePerson });
//   };


  render() {
    //   console.log(this.state.personToEdit)
    // const people = this.state.people.map((person) => {
    const peopleCards = this.displayAllPeople(this.state.people);
    return (
      <div>
        <h1>StarWars People</h1>
        
        <h2>Create Your Own Character</h2>
        <form onSubmit={this.createNewPerson}>
          <input type="text" name="name" placeholder="Enter name" value={this.state.newPerson.name} onChange={this.handleFormChange} />
          <input type="text" name="birth_year" placeholder="Enter Birth Year" value={this.state.newPerson.birth_year} onChange={this.handleFormChange} />
          <input type="text" name="gender" placeholder="Enter Gender" value={this.state.newPerson.gender} onChange={this.handleFormChange} />
          <input type="text" name="height" placeholder="Enter Height" value={this.state.newPerson.height} onChange={this.handleFormChange} />
          <input type="text" name="mass" placeholder="Enter Weight" value={this.state.newPerson.mass} onChange={this.handleFormChange} />
          <input type="text" name="hair_color" placeholder="Enter Hair Color" value={this.state.newPerson.hair_color} onChange={this.handleFormChange} />
          <input type="text" name="eye_color" placeholder="Enter Eye Color" value={this.state.newPerson.eye_color} onChange={this.handleFormChange} />
          <input type="text" name="skin_color" placeholder="Enter Skin Color" value={this.state.newPerson.skin_color} onChange={this.handleFormChange} />
          <button type="submit">Create Character</button>
        </form>
        {peopleCards}
        {/* {this.state.people.map(person => <div onClick={() => this.getCurrentSelected(person)} key={person._id}>{person.name}</div>)} */}
        <h2>Update Character</h2>
        {this.state.personToEdit._id && 
        <form onSubmit={this.updatePerson}>
          <input type="text" name="name" placeholder="Enter name" value={this.state.personToEdit.name} onChange={this.handleEditChange} />
          <input type="text" name="birth_year" placeholder="Enter Birth Year" value={this.state.personToEdit.birth_year} onChange={this.handleEditChange} />
          <input type="text" name="gender" placeholder="Enter Gender" value={this.state.personToEdit.gender} onChange={this.handleEditChange} />
          <input type="text" name="height" placeholder="Enter Height" value={this.state.personToEdit.height} onChange={this.handleEditChange} />
          <input type="text" name="mass" placeholder="Enter Weight" value={this.state.personToEdit.mass} onChange={this.handleEditChange} />
          <input type="text" name="hair_color" placeholder="Enter Hair Color" value={this.state.personToEdit.hair_color} onChange={this.handleEditChange} />
          <input type="text" name="eye_color" placeholder="Enter Eye Color" value={this.state.personToEdit.eye_color} onChange={this.handleEditChange} />
          <input type="text" name="skin_color" placeholder="Enter Skin Color" value={this.state.personToEdit.skin_color} onChange={this.handleEditChange} />
          <button type="submit">Edit Character</button>
        </form>}
      </div>
    );
    {
      /* return <div>{people}</div>; */
    }
  }
}

export default People;
