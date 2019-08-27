import React from "react"

const ProjectTableRow = ({ id, name, description, history }) => {
  function redirectToShow(event) {
    event.preventDefault()
    history.push(`/projects/${id}`)
  }

  return (
    <tr>
      <td>
        <a href={`/projects/${id}`} onClick={redirectToShow}>
          {name}
        </a>
      </td>
      <td>{description}</td>
    </tr>
  )
}

export default ProjectTableRow
