import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Wheel from './Wheel';

export default class NewsBar extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }
constructor(){
  super();
  this.state={
   articles:[],
   page:1,
   pageSize:20,
   totalResults:36,
   status:true,
   category:'general'
  };
};
async componentDidMount(){
  this.setState({
    status:true
  });
     let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=ad68092dc925438db987245e97a95953`;
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      status:false
    })
}
handleNextClick= async ()=>{
  console.log('next');
  this.setState({
    status:true
  });
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58e13f8e36f14d2baeb1460921caf53c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  let data= await fetch(url);
  let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      status:false
    });
}
handlePrevClick=async ()=>{
if (!(this.state.page<=1)) {
  this.setState({
    status:true
  });
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58e13f8e36f14d2baeb1460921caf53c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data= await fetch(url);
  let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      status:false
    })
  }
}
  render() {
    return (
    
            <div className="container  ">
      {this.state.status && <Wheel/>}
             <div className="row">
      {this.state.articles.map((element)=>{
       return <div className="col-md-4" key={element.url}> 
         <Newsitem url={!element.url?"https://unsplash.com/photos/YkXdt3429hc":element.url} title={!element.title?"":element.title} description={!element.description?'':element.description} urlToImage={!element.urlToImage?'https://media.npr.org/assets/img/2023/03/20/ap23079053509429_wide-db3259c9f81c73169b2ff9787271969dec92dc68-s1400-c100.jpg':element.urlToImage} author={element.author} publishedAt={element.publishedAt} name={element.source.name} />
        </div >
      })}
        </div>
        {/* <div className='container '>    
          <button className='btn ml-16 py-2 px-2 '
           disabled={this.state.page<=1?true:false} 
           onClick={this.handlePrevClick}>Previous</button>
        <button className='btn btn_n float-right py-2 px-2 ' disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick}>Next</button> */}
           {/* </div> */}
           </div>
           

    )
  }
}
