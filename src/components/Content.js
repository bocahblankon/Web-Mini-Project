import React, {Component} from 'react';
import axios from 'axios'
import paginate from 'paginate-array';

export default class Content extends Component {
    constructor(props){
     super(props) 
        
     this.state = {datanya: [],size: 5, page: 1, currPage: null}
        
     this.previousPage = this.previousPage.bind(this);
     this.nextPage = this.nextPage.bind(this);
     this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){ 
        
     /*axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {	    //console.log(response)
     this.setState({datanya: response.data})
     }).catch(error => {
      console.log(error)
     })
     */
     
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(datanya => {
        const { page, size } = this.state;

        const currPage = paginate(datanya, page, size);

        this.setState({
          //datanya: response.data,
          //this.state,
          datanya,
          currPage
        });
     });
     
    }
    
    
    previousPage() {
    const { currPage, page, size, datanya } = this.state;

    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(datanya, newPage, size);

      this.setState({
        //datanya: response.data,
        page: newPage,
        currPage: newCurrPage
      });
    }
  }

  nextPage() {
    const { currPage, page, size, datanya } = this.state;

    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(datanya, newPage, size);
      this.setState({ page: newPage, currPage: newCurrPage });
    }
  }

  handleChange(e) {
    const { value } = e.target;
    const { datanya, page } = this.state;

    const newSize = +value;
    const newPage = 1;
    const newCurrPage = paginate(datanya, newPage, newSize);

    this.setState({
      //datanya: response.data,
      size: newSize,
      page: newPage,
      currPage: newCurrPage
    });
  }
    
    render(){
        const { page, size, currPage } = this.state;

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Dashboard</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong> List of Items with pagination</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="row">
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right"> 


                                               <div>
                                                <div>[ page: {page} ] [ size: {size} ] [ <label for="size">Size</label>
                                                  <select name="size" id="size" onChange={this.handleChange}>
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                  </select> ]
                                                 </div> 
                                                    <div>
                                                    <table width='90%' border='0'>
                                                    <tr>
                                                     <td width="30%">No</td>
                                                     <td>UserId</td>
                                                     <td>Title</td>
                                                    </tr>
                                                    <tr> 
                                                        <td>
                                                        {
                                                         currPage &&

                                                          <div>
                                                            {currPage.data.map(dat => <div key={dat.id}>{dat.id}</div>)}
                                                          </div>
                                                        } 
                                                        </td>
                                                        <td>
                                                        {
                                                         currPage &&

                                                          <div>
                                                            {currPage.data.map(dat => <div>{dat.userId}</div>)}
                                                          </div>
                                                        } 
                                                        </td>
                                                        <td align="left">
                                                        {
                                                         currPage &&

                                                          <div>
                                                            {currPage.data.map(dat => <div>{dat.title}</div>)}
                                                          </div>
                                                        } 
                                                        </td>
                                                    </tr> 
                                                    </table>
                                                    </div>
                                                    <div>
                                                            <button onClick={this.previousPage}>Previous Page</button>
                                                    <button onClick={this.nextPage}>Next Page</button>
                                                    </div>

                                              </div>


                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}