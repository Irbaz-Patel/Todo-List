import React, { useEffect,useState } from 'react'


const Todos = (props) => {
    const myStyle={
        fontSize: '30px'
    }
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [data,setData]=useState([])

    useEffect(() => {
        const storedData = localStorage.getItem('todosData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    const submit=()=>{
        if(!title && !desc){
            props.showAlert("Title & Description Cannot Be Blanked!")
        }
        else{
            const newData=[...data,{title,desc}]
            setData(newData)
            localStorage.setItem('todosData', JSON.stringify(newData));
            setTitle("")
            setDesc("")
        }
    }


    const deleteList = (index) => {
      const confirmation = window.confirm("Are you sure you want to delete this item?");
      if (confirmation) {
          const newData = [...data];
          newData.splice(index, 1);
          setData(newData);
          localStorage.setItem('todosData', JSON.stringify(newData));
      }
  }
  


  return (
    <>
      <div className="container mt-5">
  <div className="mb-3">
    <label style={myStyle} htmlFor="exampleFormControlInput1" className="form-label">
      Title
    </label>
    <input
    value={title}
      type="text"
      onChange={(event)=>setTitle(event.target.value)}
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="Your Title Name"
      />
  </div>
  <div className="mb-3">
    <label style={myStyle} htmlFor="exampleFormControlTextarea1" className="form-label">
      Description
    </label>
    <textarea
       value={desc}
       onChange={(event)=>setDesc(event.target.value)}
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={2}
      placeholder="Your Description...."
    />
  </div>
  <button type="submit"className="btn btn-success" onClick={submit}>Add To List</button>
  <div className="row my-3">
  { 
  data.length===0?"Empty todo list, but not for long!":
      data.map((element,index)=>{
        return (
    <div className="col-md-3 my-3"  key={index}>
  <div className="card">
  <div className="card-body">
    <h5 className="card-title">{element.title}</h5>
    <p className="card-text">{element.desc}</p>
    <button className="btn btn-primary" onClick={()=>deleteList(index)}>Delete <i className="far fa-trash-alt mx-2"></i></button>
  </div>
  </div>
</div>
        )
    })
  }
  </div>
   </div>
   </>
  )
}

export default Todos
