import React from 'react';
import { connect } from 'react-redux';

import './modal.css';

export const Modal = ({ active }) => {
  return (
    <div className="modal" onClick={() => {}}>
      <div className={active ? 'modal-content modal-active' : 'modal-content'} onClick={(e) => e.stopPropagation()}>
        <p>Are you sure to delete this article?</p>
        <button>No</button>
        <button>Yes</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
