

class ListItem extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        const {id, text, click} = this.props;
        console.log(this.props);
        return(
            <tr>
                <td>
                    {this.props.text}
                </td>
                <td>
                    <button className="button is-danger" onClick={()=> { this.props.onClick(this.props.id)}}>Delete Task</button>
                </td>
            </tr>

        );
    }
}

