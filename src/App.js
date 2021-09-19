import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Todo></Todo>
      <Blog></Blog>
    </div>
  );
}

function Todo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setData(data));
  },[])
  return (
    <div>
      {
        data.map(d=><User id={d.id} title={d.title}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ listStyle: 'none', display:'flex',textAlign:'center',margin:'20px', rowGap:'10px',columnGap:'50px',backgroundColor:'gray',padding:'0px 20px'}}>
      <li>{props.id}</li>
      <li>{props.title}</li>
    </div>
    
  )
}


function Mobile() {
  const [charge, setCharge] = useState(100);
  const handleCharge = () => {
    let newCharge = charge - 10;
    setCharge(newCharge);
    if (charge === 0) {
      // alert('Please,Charge your battery');
      setCharge(0);
    }
  }
  return (
    <div>
      <h3>Charge: {charge}</h3>
      <button onClick={handleCharge}>battery down</button>
    </div>
  )
}


function Blog() {
  const[blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-19&sortBy=publishedAt&apiKey=0560ff21da5d41dfa76f7266885f5b41')
    .then(res => res.json())
    .then(data=>setBlogs(data.articles))
  }, [])
  return (
    <div className="">
      {
        blogs.map(blog=><Article title={blog.title} author={blog.author} desc={blog.description} img={blog.urlToImage}></Article>)
    }
  </div>
  )
}

function Article(props) {
  return (
    <div className="blog">
    <article>
        <h2>{props.title}</h2>
        <h5>{props.author}</h5>
        <p>{props.desc}</p>
        <img className="blog-img" src={props.img} alt="" />
    </article>
  </div>
  )
}



export default App;
