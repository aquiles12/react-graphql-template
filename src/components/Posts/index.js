// Dependencies:
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components:
import Posts from './Posts'

// Actions:
import { getDefaultList } from '../../redux/modules/posts/actions'

const mapStateToProps = (state) => {
  return {
    defaultList: state.posts.defaultList,
    isFetching: state.posts.isFetching,
    errorMsg: state.posts.errorMsg
  }
}


const mapDispatchToProps = (dispatch) => ({
  getDefaultList: bindActionCreators(getDefaultList, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
