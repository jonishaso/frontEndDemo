import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
const PageButtons = (totalPage, currentPage) => {
  console.log(totalPage)
  console.log(currentPage)

	return (
		<ButtonGroup color="primary" aria-label="outlined primary button group">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	)
}

export default PageButtons