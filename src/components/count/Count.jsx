
const Count = ({id, value}) => {
  console.log(`count${id} is rendering`);
  return (
    <div id={id}>{value}</div>
  )
}

export default Count