const Link = (props) => {
    console.log(props)
    
  return (
    <>
      <li>
        <a href={props.data}>{props.content}</a>
      </li>
    </>
  );
};

export default Link;
