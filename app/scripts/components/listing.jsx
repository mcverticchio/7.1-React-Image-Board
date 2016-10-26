var _ = require('underscore');
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var ImageListComponent = React.createClass({
  handleEdit: function(e){
    this.props.handleEdit(this.props.model);
  },
  handleDelete: function(e){
    this.props.deleteImage(this.props.model);
  },
    render: function(){
      var imageSrc = this.props.model.get('url');
      var imageCaption = this.props.model.get('caption');

      return(
        <div className="col-md-6 col-md-offset-3">
          <div className="thumbnail">
            <img src={imageSrc} />
            <div className="caption">
              <p>{imageCaption}</p>
              <p>
                <a onClick={this.handleEdit} href="#" className="btn btn-primary" role="button">Edit</a>
                <a onClick={this.handleDelete} href="#" className="btn btn-default" role="button">Remove</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
  });

module.exports = {
  ImageListComponent : ImageListComponent
};
