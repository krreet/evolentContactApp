import React, {Component} from 'react'

class FormError extends Component {

  render() {
    const {errors} = this.props

    return (
      <div>
      {Object.keys(errors).map(error => {
        if (errors[error].length > 0){
          return (
            <p key={error} className="red">{errors[error]}</p>
          )
        }
        return ''
      })}
      </div>
    )
  }
}
export default FormError
