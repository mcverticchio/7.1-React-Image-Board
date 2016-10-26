// 3rd Party
var React = require('react');
var _ = require('underscore');

//Local imports
var ImageCollection = require('../models/image.js').ImageCollection;
var Image = require('../models/image.js').Image;
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ImageListComponent;


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageCollection();
    var imageModel = new Image();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return{
      collection: imageBoard,
      imageToDelete: imageModel,
      imageToEdit: false,
      showForm: false
    };
  },

  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});

  },
  handleEdit: function(model){
    this.setState({showForm: true, imageToEdit: model});
  },
  handleToggleForm: function(e){
    e.preventDefault();

    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },
  deleteImage: function(image){
    image.destroy();
    this.setState({collection: this.state.collection});
  },
  editImage: function(model, data){
    model.set(data);
    model.save();

    this.setState({imageToEdit: false, showForm: false});
  },
    render: function(){
      var self = this;

      var imageList = this.state.collection.map(function(image){
        return (
          <ListingComponent
            key={image.get("_id")}
            model={image}
            deleteImage={self.deleteImage}
            handleEdit={self.handleEdit}
          />
        );
      });
      return (
        <div>
          <header className="container-fluid main-header">
            <a className="add-image" href="#" onClick={this.handleToggleForm}><i className="glyphicon glyphicon-plus"></i></a>
            <h1>A Day at the Iron Yard</h1>
          </header>

          <div className= "container">
            <div className = "row">
              <div className="col-md-12">
                {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage} editImage={this.editImage}/> : null}
              </div>
            </div>
          <div className="row">
            {imageList}
          </div>

        </div>
      </div>
    );
  }
});


module.exports = {
  AppComponent: AppComponent
};
