import React from 'react';
import BarChart from 'react-bar-chart';
import './Chart_CSS_Element.css';


const margin = {top: 20, right: 20, bottom: 30, left: 100};
const data = [
  {text: 'Man', value: 0.20}, 
  {text: 'Woman', value: 0.330} 
   ]
  
class Chart extends React.Component {
    
constructor(props) {
    super(props);
    this.state = {
      isGoing: 0,
      numberOfGuests: 2
        
    };
        this.handleInputChange = this.handleInputChange.bind(this);
  }
  
    

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
      if (name==='isGoing')
      { data[0]['value'] = value; }
       if (name==='numberOfGuests')
      { data[1]['value'] = value; }
//      console.log(value);
//      console.log(target);
//      console.log(name);
      console.log(data[0]['value']);
          
  }
    
   handleClick(data) {       
    console.log('По кнопке кликнули');       
  }
    
  render(){
    return (
   <div class="input">
 
        <table > 
        <tr> 
            <td>   
            <form>
                <label>
                Men:
                   <input
                        name="isGoing"
                        type="number"
                        value={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
              </form> 
            </td> 
           
            <td> 
              <form>
                <label>
                Women:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
              </form> 
            </td> 
        </tr>
        </table>
        
              <div>
            <div > 
                <BarChart 
                  ylabel='Quantity'
                  data={data}
                  width={700}
                  height={500}
                  margin={margin}
       
                  />
            </div>
        </div>
               
        
        
    </div>
    );
  }
}
    
    
    
export default Chart;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   