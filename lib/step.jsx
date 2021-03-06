var React = require('react');
var classNames = require('classnames');

var Step = React.createClass({
  getInitialState: function() {
    return {};
  },

  getDefaultProps: function() {
    return {
      description: null,
      isActive: false,
      onNext: function(){},
      onPrevious: function(){},
      onError: function(){},
      isValid: true
    };
  },

  propTypes: {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    isActive: React.PropTypes.bool,
    onNext: React.PropTypes.func,
    onPrevious: React.PropTypes.func,
    onError: React.PropTypes.func,
    isValid: React.PropTypes.bool,
  },

  render: function () {
    var description = null;

    var classes = classNames(
      "sw-step",
      this.props.className,
      {"sw-active": this.props.isActive}
    );

    if(this.props.description) {
      description = (<div className="sw-header"><p className="sw-description">{this.props.description}</p></div>)
    }
  
    return (
      <div className={classes}>
        <div className="overflow-y">
          {this.props.children}
        </div>
      </div>
    );
  },
});

module.exports = Step;