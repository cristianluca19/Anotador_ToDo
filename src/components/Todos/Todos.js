import React from "react";
import { Link } from "react-router-dom";

export default function Todos(props) {
  console.log('el de todos', props.el)
  return (
    <div>
      <div>
{/* 
      <button type="button" class={"btn" + props.clase}  data-toggle="modal" data-target="#exampleModal">
        {props.el.title}
      </button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="bd-example-modal-lg">Large modal</button>

<div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

