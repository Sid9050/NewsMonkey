import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner  from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News=()=> {
  const [articles,setArticles]=useState([])
 
  article=[]
  constructor(props){
    super(props);
    this.state={
      article:this.article,
      loading: false,
      page:1,
      totalResults:0
    }
    document.title=`${this.props.category}- NewsMonkey`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(60);
    this.setState({article:parsedData.articles,
                  totalResults:parsedData.totalResults,
                  loading:false
    });
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews()

  }

  handleNextClick=async ()=>{
    await this.setState({
      page:this.state.page+1
    })
    this.updateNews()
  }

  handlePrevClick=async ()=>{
    await this.setState({
      page:this.state.page-1
    })

    this.updateNews()
  }

  fetchMoreData=async ()=>{
    await this.setState({page:this.state.page+1})
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({article:this.state.article.concat(parsedData.articles) ,
                  totalResults:parsedData.totalResults,
    });
  }

  render() {
    return (
      <>
        <h1 className='text-center'>NewsMonkey- Top {this.props.category} Headlines </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length<this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className="row">
          {this.state.article.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
              </div>
          
          })}
      </div>
        </div>
        </InfiniteScroll>

        {/*<div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize )} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>*/}
        </>
    )
  }
}

News.defaultProps={
  country:"in",
  pageSize:8
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
}

export default News
