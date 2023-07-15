
export default function Task(props) {
    return (
    <div>
        <input type="checkbox" />
        <p>{props.description}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>)
}