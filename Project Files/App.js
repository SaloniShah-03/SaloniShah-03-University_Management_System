import React from 'react';
import './index.css'

class myComponent extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      selectValue1:"",
      selectValue2:"",
      todos: [],
      todosL:[],
      todos1: [],
      todos11:[],
      todos2: [],
      todos21:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }
//GPA
    handleChange(event) {
      this.setState({selectValue: event.target.value});
    }
    handleSubmit(event) {
     alert('The selected option is : ' + this.state.selectValue);
    console.log(this.state.selectValue)
      event.preventDefault();

      
      const requestOptions = {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-type':'application/json',},
        body: JSON.stringify({ id: this.state.selectValue })
    };

    fetch('http://localhost:4000/d1', requestOptions)
        .then((response) => response.json())
  
        .then((data) => {
        this.setState({ todos: data })
        console.log(this.state.todos)  

    }

  
        )}
 //Work_Ex 
        handleChange1(event) {
          this.setState({selectValue1: event.target.value});
        }
        handleSubmit1(event) {
         alert('The selected option is : ' + this.state.selectValue1);
        console.log(this.state.selectValue1)
          event.preventDefault();
    
          
          const requestOptions = {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-type':'application/json',},
            body: JSON.stringify({ id: this.state.selectValue1 })
        };
    
        fetch('http://localhost:4000/d2', requestOptions)
            .then((response) => response.json())
      
            .then((data) => {
            this.setState({ todos1: data })
            console.log(this.state.todos1)  
    
        }
        
            )}

  //Project 
  handleChange2(event) {
    this.setState({selectValue2: event.target.value});
  }
  handleSubmit2(event) {
   alert('The selected option is : ' + this.state.selectValue2);
  console.log(this.state.selectValue2)
    event.preventDefault();

    
    const requestOptions = {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-type':'application/json',},
      body: JSON.stringify({ id: this.state.selectValue2 })
  };

  fetch('http://localhost:4000/d3', requestOptions)
      .then((response) => response.json())

      .then((data) => {
      this.setState({ todos2: data })
      console.log(this.state.todos2)  

  }
  
      )}


    
  componentDidMount() {
    
    //Location
        const apiUrl = 'http://localhost:4000/d'; 
           
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
          this.setState({ todos: data})  
          console.log(this.state.todos)  
      
        }
       )
      }


      render() {

    

        //Location Wise
       
        return <h1></h1> ,

    
    
    
    
      

  

        <div>

          <header>
          <div class="left_area">
           <h3>Placement <span> Cell</span></h3>
           </div>

           <div class="right_area">
          <a href="#" class="logout_btn">Logout</a>
        </div>
        </header>
        <div class="sidebar">
        <h4>Nimil Shah</h4>

        <a href="#"> <i class="fa fa-desktop" aria-hidden="true"></i><span>Dashboard</span></a>
        <a href="#"> <i class="fa fa-user" aria-hidden="true"></i><span>Personal Details</span></a>
        <a href="#"> <i class="fa fa-plus-circle" aria-hidden="true"></i><span>Profile</span></a>
        <a href="#"> <i class="fa fa-file" aria-hidden="true"></i><span>Resources</span></a>
        <a href="#"> <i class="fa fa-cog" aria-hidden="true"></i><span>Settings</span></a>

        <div class="content"></div>





        </div>

        <section class="container">
        <div className = "main chart-wrapper">
        <div className="sub chart-wrapper"   >
       
        <h1>Filter based on Job Designations</h1>
       <form onSubmit={this.handleSubmit}>

       <div class="dropdown">
    <select name="one" class="dropdown-select"
            value={this.state.selectValue} 
            onChange={this.handleChange} >
      <option value="">Designations</option>
      <option value="SoftwareDeveloper">Software Developer</option>
      <option value="DataAnalyst">Data Analyst</option>
      <option value="DataScientist">Data Scientist</option>
    </select>
  </div>

     <input type="submit" value="Submit"/>
     </form>
</div>     
</div> 

<div className = "main chart-wrapper">
<div className="sub chart-wrapper">
 

<h1>Filter based on salaries</h1>
 <form onSubmit={this.handleSubmit1}>

        <div class="dropdown dropdown-dark">
    <select name="two" class="dropdown-select"
            value={this.state.selectValue1} 
            onChange={this.handleChange1} >
      <option value="">Salaries(in lakhs)</option>
      <option value="3">3 Lakhs or greater</option>
      <option value="5">5 Lakhs or greater</option>
      <option value="7">7 Lakhs or greater</option>
    </select>
  </div>

     <input type="submit" value="Submit"/>
     </form>
</div>     
</div> 


</section>
</div>    
      }
}


export default myComponent;