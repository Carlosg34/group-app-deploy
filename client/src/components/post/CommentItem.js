import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div
        className="card card-body mb-3 border-0"
        style={{ width: "50%", margin: "auto", backgroundColor: "#d7e5ef" }}
      >
        <div className="row">
          <div className="col-md-4 border-right border-light">
            {/* <a href="/profile"> */}
            <img
              className="rounded-circle d-none d-md-block"
              src={comment.avatar}
              alt=""
              style={{ width: "80%", margin: "auto" }}
            />
            {/* </a> */}
            <br />
            <p className="text-center">{comment.name}</p>
          </div>
          <div className="col-md-8">
            <p className="lead">{comment.bname}</p>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                type="button"
                className="btn btn-sm btn-danger mr-1 float-right"
              >
                Delete
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
