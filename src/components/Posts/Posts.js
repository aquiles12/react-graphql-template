import React, { Component } from 'react'
import './styles.css'

export default class ListJson extends Component {
	componentDidMount = () => {
		this.props.getDefaultList();
	}

	render() {
		const {
			errorMsg,
			defaultList,
			isFetching
		} = this.props
		const fetch = isFetching && <span>Loading...</span>
		const err = errorMsg && <span>{errorMsg}</span>

		return (
			<div className="container">
				{fetch}
				<div>
					{defaultList.map(item => (
						<div key={`${item.id}${item.title}`} >
							<span>{item.title}</span>
						</div>
					)
					)}
				</div>
				{err}
			</div>
		)
	}
}
