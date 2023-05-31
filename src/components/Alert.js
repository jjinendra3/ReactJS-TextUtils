import React from 'react'
function Alert(props) {
  let first_word;
  if(props.alert!==null){
    let str = props.alert.type;
  first_word = str.charAt(0).toUpperCase() + str.slice(1);
}
  return (
props.alert && <div className={`alert alert-${props.alert.type  } alert-dismissible fade show`} role="alert">
        {first_word}:{props.alert.msg}
  </div>
  )
}

export default Alert