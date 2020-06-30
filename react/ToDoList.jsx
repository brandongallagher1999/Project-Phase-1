


class ToDoList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.inc = 0;
        this.state = {
            itemList : []
        };
    };

    removeItem(id) //id is int
    {

        console.log("UPDATING REMOVE STATE");
        let temp = this.state.itemList;
        let newArr = [];
        for (let i = 0; i < temp.length; i++)
        {
            if (temp[i].id != id)
            {
                newArr.push(temp[i]);
            }
        }
        console.log(newArr);
        this.setState({itemList : newArr});
    }

    addItem(e)
    {
        e.preventDefault();
        console.log("okay");
        let temp = this.state.itemList;
        temp.push({elem: <ListItem key={this.inc} id={ this.inc} text= {document.getElementById("toDoInput").value} onClick={this.removeItem.bind(this)}></ListItem>, id: this.inc});
        this.inc += 1;
        
        this.setState({
            itemList : temp
        });

    }

    render()
    {
        return(
            <div>
                <form>
                    <input id ="toDoInput" type="text" className="input is-primary" placeholder="To-Do List Item"></input>
                    <br></br>
                    <br></br>
                    <button className="button is-primary" onClick={(e)=> {this.addItem(e)}}>Submit to-do list item</button>
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                To Do Item
                            </th>
                            
                            <th scope="col">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.itemList.map((e) => {
                                return e.elem
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        );
    }
    
}




ReactDOM.render(<ToDoList />, document.getElementById("to-do-list"));