var _ = require('underscore');
var React = require('react');
var Backbone = require('backbone');

var ImageAddForm = React.createClass({
  componentWillMount: function(){
    this.showForm = false;
  },
  handleClick: function(event){
  event.preventDefault();

  this.showForm = !this.showForm;
  this.forceUpdate();
  },
  render: function(){
    var display;
    if(this.showForm){
      var display = (
        <form>
          <div class="form-group row">
            <div class="col-xs-12">
              <input class="form-control" type="url" id="example-url-input" placeholder="Image URL"/>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-xs-12">
              <input class="form-control" type="text" id="example-text-input" placeholder="Image Caption"/>
            </div>
          </div>
          <button type="button" name="button">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Image</button>
        </form>
      );
    }

    return (
      <div className="well">
        <button className="btn btn-success" onClick={this.handleClick}>Show Form</button>
        {display}
      </div>
    );
   }
  });

module.exports = {
  ImageAddForm: ImageAddForm
}
