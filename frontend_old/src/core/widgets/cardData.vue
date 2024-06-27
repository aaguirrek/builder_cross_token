
<template>
  <div class="MatcWidget MatchWidgetTypeButton MatcEventedWidget MatcSimulatorClickable">
      <div data-dojo-attach-point="labelNode" class="MatcInlineEditable">{{label}}</div>
  </div>
</template>
<script>
import DojoWidget from "dojo/DojoWidget";
import lang from "dojo/_base/lang";
import UIWidget from "core/widgets/UIWidget";

export default {
  name: "Button",
  mixins: [UIWidget, DojoWidget],
  data: function() {
    return {
      value: this.value,
      internal_id:'',
      style: {},
      model: {},
    };
  },
  components: {},
  computed: {
      label () {
        if (this.model && this.model.props && this.model.props.label) {
            return this.model.props.label
        }
        return ''
      }
  },
  methods: {
    getName(){
      return 'ButtonData'
    },
    postCreate() {
      this._borderNodes = [this.domNode];
      this._backgroundNodes = [this.domNode];
      this._shadowNodes = [this.domNode];
      this._paddingNodes = [this.domNode];
      this._labelNodes = [this.labelNode];
    },

    wireEvents() {
      this.own(this.addClickListener(this.domNode, lang.hitch(this, "onClick")));
      this.wireHover()
    },

    getLabelNode() {
      return this.labelNode;
    },

    render(model, style, scaleX, scaleY) {
      this.model = model;
      this.style = style;
      this._scaleX = scaleX;
      this._scaleY = scaleY;
      if (model.props && model.props.internal_id  ) {
        const internal_id = model.props.internal_id    
        this.internal_id = internal_id         
      }
      this.setStyle(style, model);
    },

    updateScale (model, style, scaleX, scaleY) {
      this._scaleX = scaleX;
      this._scaleY = scaleY;
      this.setStyle(style, model);
    },

    getValue() {
      return this.value;
    },


    /**
     * Can be overwritten by children to have proper type conversion
     */
     _setDataBindingValue (v) {
    /*  if (v !== true && v !== false && v >= 1) {
        v = true;
      } */
      this.setValue(v);
    },

    setValue (value, ignoreValidation) {
      if (value == undefined || value == null) {
        value = false;
      }

      this.value = value;
      let valid = true;
      if (!ignoreValidation) {
        valid = this.validate(this.value, true);
      }

      if (value) {
        if (this.model.active && valid) {
          this.setStyle(this.model.active);
        }
      } else {
        if (valid) {
          this.setStyle(this.model.style);
        }
        if (this.model.props.activeLabel) {
          this.setInnerHTML(this.labelNode, this.model.props.activeLabel);
        }
      }
    },


    getState () {
      return {
        value: this.value
      };
    },

    setState (state) {
      if (state ) {
        this.setValue(state.value);
      }
    },
    onClick(e) {
      localStorage.setItem(this.internal_id,this.value)
      this.stopEvent(e);
      this.emitClick(e);
    }
  },
  mounted() {}
};
</script>