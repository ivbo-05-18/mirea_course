import React from 'react';
import BarChart from 'react-bar-chart';
import './Chart_CSS_Element.css';


const margin = {top: 20, right: 20, bottom: 30, left: 100};
const data = [
  {text: 'Men', value: 0.20}, 
  {text: 'Women', value: 0.330} 
   ]
  
class Chart extends React.Component {
    
constructor(props) {
    super(props);
    this.state = {
      Men: null,
      Women: null
        
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
      if (name==='Men')
      { data[0]['value'] = value; }
       if (name==='Women')
      { data[1]['value'] = value; }

      console.log(data[0]['value']);
         console.log(data[1]['value']);
          
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
                       
                        name="Men1"
                        type="number"
                        value={this.state.Men}
                        onChange={this.handleInputChange} />
                </label>
              </form> 
            </td> 
           
            <td> 
              <form>
                <label>
                Women:
                    <input
                        name="Women"
                        type="number"
                        value={this.state.Women}
                        onChange={this.handleInputChange} />
                </label>
              </form> 
            </td> 
        </tr>
        </table>
       
  
            
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
    );
  }
}
    
    
    
export default Chart;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   