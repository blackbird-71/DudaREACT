/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

const JQXLite = window.JQXLite;

export default class JqxRating extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['count','disabled','height','itemHeight','itemWidth','precision','singleVote','value','width'];
        let options = {};
        for(let item in this.props) {
              if(item === 'settings') {
                  for(let itemTwo in this.props[item]) {
                      options[itemTwo] = this.props[item][itemTwo];
                      }
                } else {
                      if(properties.indexOf(item) !== -1) {
                        options[item] = this.props[item];
                      }
                }
          }
          return options;
      };
    createComponent(options) {
        if(!this.style) {
              for (let style in this.props.style) {
                  JQXLite(this.componentSelector).css(style, this.props.style[style]);
              }
        }
        if(this.props.className !== undefined) {
            let classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxRating(options);
    };
    generateID() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxRating('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxRating(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    count(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('count', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('count');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('height');
        }
    };
    itemHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('itemHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('itemHeight');
        }
    };
    itemWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('itemWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('itemWidth');
        }
    };
    precision(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('precision', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('precision');
        }
    };
    singleVote(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('singleVote', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('singleVote');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRating('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRating('width');
        }
    };
    disable() {
        JQXLite(this.componentSelector).jqxRating('disable');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxRating('enable');  
    };
    getValue() {
        return JQXLite(this.componentSelector).jqxRating('getValue');  
    };
    setValue(value) {
        JQXLite(this.componentSelector).jqxRating('setValue', value);  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxRating('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxRating('val');
        }
    };

    render() {
        let id = 'jqxRating' + this.generateID() + this.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

