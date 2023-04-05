const Container = (props) => {
  return (
        <div {...props} className="custom-container">
            {props.children}
        </div>
    );
};

export default Container;
